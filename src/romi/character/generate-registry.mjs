// Generate the Romi character registry from the Figma bodies strip.
// Parses SVG paths, samples curves for bboxes, derives per-body face anchors
// from the baked default-face eyes, and emits registry data as JSON.
import fs from "node:fs";

const REPO = process.cwd(); // run from the repo root

/* ---------- tiny SVG path sampler (M m L l H h V v C c S s Q q T t Z z) ---------- */
function samplePath(d, steps = 60) {
  const tokens = d.match(/[MmLlHhVvCcSsQqTtZz]|-?\d*\.?\d+(?:e-?\d+)?/g);
  const pts = [];
  let i = 0, cmd = null;
  let x = 0, y = 0, sx = 0, sy = 0, pcx = null, pcy = null;
  const num = () => parseFloat(tokens[i++]);
  const push = (px, py) => pts.push([px, py]);
  const cubic = (x0, y0, x1, y1, x2, y2, x3, y3) => {
    for (let t = 0; t <= steps; t++) {
      const u = t / steps, v = 1 - u;
      push(
        v*v*v*x0 + 3*v*v*u*x1 + 3*v*u*u*x2 + u*u*u*x3,
        v*v*v*y0 + 3*v*v*u*y1 + 3*v*u*u*y2 + u*u*u*y3
      );
    }
  };
  const quad = (x0, y0, x1, y1, x2, y2) => {
    for (let t = 0; t <= steps; t++) {
      const u = t / steps, v = 1 - u;
      push(v*v*x0 + 2*v*u*x1 + u*u*x2, v*v*y0 + 2*v*u*y1 + u*u*y2);
    }
  };
  while (i < tokens.length) {
    const tok = tokens[i];
    if (/^[MmLlHhVvCcSsQqTtZz]$/.test(tok)) { cmd = tok; i++; if (cmd === "Z" || cmd === "z") { x = sx; y = sy; push(x, y); continue; } }
    const rel = cmd === cmd.toLowerCase();
    switch (cmd.toUpperCase()) {
      case "M": { const nx = num(), ny = num(); x = rel ? x + nx : nx; y = rel ? y + ny : ny; sx = x; sy = y; push(x, y); cmd = rel ? "l" : "L"; pcx = pcy = null; break; }
      case "L": { const nx = num(), ny = num(); const tx = rel ? x + nx : nx, ty = rel ? y + ny : ny; push(tx, ty); x = tx; y = ty; pcx = pcy = null; break; }
      case "H": { const nx = num(); const tx = rel ? x + nx : nx; push(tx, y); x = tx; pcx = pcy = null; break; }
      case "V": { const ny = num(); const ty = rel ? y + ny : ny; push(x, ty); y = ty; pcx = pcy = null; break; }
      case "C": { let x1 = num(), y1 = num(), x2 = num(), y2 = num(), x3 = num(), y3 = num(); if (rel) { x1 += x; y1 += y; x2 += x; y2 += y; x3 += x; y3 += y; } cubic(x, y, x1, y1, x2, y2, x3, y3); pcx = x2; pcy = y2; x = x3; y = y3; break; }
      case "S": { let x2 = num(), y2 = num(), x3 = num(), y3 = num(); if (rel) { x2 += x; y2 += y; x3 += x; y3 += y; } const x1 = pcx !== null ? 2 * x - pcx : x, y1 = pcy !== null ? 2 * y - pcy : y; cubic(x, y, x1, y1, x2, y2, x3, y3); pcx = x2; pcy = y2; x = x3; y = y3; break; }
      case "Q": { let x1 = num(), y1 = num(), x2 = num(), y2 = num(); if (rel) { x1 += x; y1 += y; x2 += x; y2 += y; } quad(x, y, x1, y1, x2, y2); pcx = x1; pcy = y1; x = x2; y = y2; break; }
      case "T": { let x2 = num(), y2 = num(); if (rel) { x2 += x; y2 += y; } const x1 = pcx !== null ? 2 * x - pcx : x, y1 = pcy !== null ? 2 * y - pcy : y; quad(x, y, x1, y1, x2, y2); pcx = x1; pcy = y1; x = x2; y = y2; break; }
      default: i++; // skip unknown
    }
  }
  return pts;
}
const bboxOf = (pts) => {
  let minX = 1e9, minY = 1e9, maxX = -1e9, maxY = -1e9;
  for (const [px, py] of pts) { if (px < minX) minX = px; if (py < minY) minY = py; if (px > maxX) maxX = px; if (py > maxY) maxY = py; }
  return { x: minX, y: minY, w: maxX - minX, h: maxY - minY, cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
};

/* ---------- parse the strip: 60 paths = 12 x [body, eyeA, eyeB, mouth, inner] ---------- */
const strip = fs.readFileSync(`${REPO}/public/romi/characters/remi-bodies-strip.svg`, "utf8");
const stripPaths = [...strip.matchAll(/<path d="([^"]+)" fill="([^"]+)"/g)].map((m) => ({ d: m[1], fill: m[2] }));
if (stripPaths.length !== 60) throw new Error("expected 60 strip paths, got " + stripPaths.length);
// sanity: fills follow the body,eye,eye,mouth,inner pattern
for (let i = 0; i < 12; i++) {
  const fills = stripPaths.slice(i * 5, i * 5 + 5).map((p) => p.fill.toUpperCase());
  const want = ["#B289DF", "#5D359B", "#5D359B", "#5D359B", "#9D6DD8"];
  if (JSON.stringify(fills) !== JSON.stringify(want)) throw new Error(`body ${i + 1} fill pattern mismatch: ${fills}`);
}

/* ---------- reference expression eyes (happy.svg: two round dots) ---------- */
const happy = fs.readFileSync(`${REPO}/public/romi/characters/expressions/happy.svg`, "utf8");
const happyPaths = [...happy.matchAll(/<path[^>]*\bd="([^"]+)"/g)].map((m) => m[1]);
const happyBoxes = happyPaths.map((d) => bboxOf(samplePath(d)));
const eyeCand = happyBoxes.filter((b) => b.w < 80 && b.h < 80 && b.w / b.h > 0.6 && b.w / b.h < 1.6).sort((a, b) => a.cx - b.cx);
if (eyeCand.length < 2) throw new Error("could not find happy.svg eyes: " + JSON.stringify(happyBoxes));
const eL = eyeCand[0], eR = eyeCand[eyeCand.length - 1];
const exprMid = { x: (eL.cx + eR.cx) / 2, y: (eL.cy + eR.cy) / 2 };
const exprVec = { x: eR.cx - eL.cx, y: eR.cy - eL.cy };
const exprDist = Math.hypot(exprVec.x, exprVec.y);

/* ---------- per-body: bbox + face anchor matrix (expression canvas -> strip) ---------- */
const r1 = (v) => Math.round(v * 10) / 10;
const r4 = (v) => Math.round(v * 10000) / 10000;
const bodies = [];
for (let i = 0; i < 12; i++) {
  const grp = stripPaths.slice(i * 5, i * 5 + 5);
  const body = bboxOf(samplePath(grp[0].d));
  const e1 = bboxOf(samplePath(grp[1].d));
  const e2 = bboxOf(samplePath(grp[2].d));
  const [bL, bR] = e1.cx <= e2.cx ? [e1, e2] : [e2, e1];
  const mid = { x: (bL.cx + bR.cx) / 2, y: (bL.cy + bR.cy) / 2 };
  const vec = { x: bR.cx - bL.cx, y: bR.cy - bL.cy };
  const s = Math.hypot(vec.x, vec.y) / exprDist;
  const th = Math.atan2(vec.y, vec.x) - Math.atan2(exprVec.y, exprVec.x);
  const a = s * Math.cos(th), b = s * Math.sin(th);
  const e = mid.x - (a * exprMid.x + -b * exprMid.y);
  const f = mid.y - (b * exprMid.x + a * exprMid.y);
  bodies.push({
    d: grp[0].d,
    bbox: [r1(body.x), r1(body.y), r1(body.w), r1(body.h)],
    face: [r1(mid.x), r1(mid.y)],
    rotDeg: Math.round((th * 180) / Math.PI * 10) / 10,
    scale: r4(s),
    m: [r4(a), r4(b), r4(-b), r4(a), r1(e), r1(f)],
  });
}

console.log("expr eyes:", JSON.stringify({ left: [r1(eL.cx), r1(eL.cy)], right: [r1(eR.cx), r1(eR.cy)], dist: r1(exprDist) }));
console.log("bodies:", bodies.map((b, i) => `${i + 1}: bbox=${b.bbox.map(Math.round)} face=${b.face.map(Math.round)} rot=${b.rotDeg}deg s=${b.scale}`).join("\n"));
fs.writeFileSync("/tmp/remi-registry.json", JSON.stringify({ exprMid, exprDist, bodies }, null, 2));
console.log("\nwrote /tmp/remi-registry.json");
