/*
 * Romi character registry - generated from the Figma design-system bodies.
 * Sources:
 *   - public/romi/characters/remi-bodies-strip.svg (the 12 "Remi Body"
 *     components exported from Figma file PZUBMk3tq6EuAiSP5jgtDo, node
 *     18-1350, each with the default face baked in)
 *   - public/romi/characters/expressions/*.svg (45 faces, 1080x1080 canvas)
 * Regenerate: see README.md. Do not hand-edit path data or matrices;
 * tweak WINDOW_FIT / colours freely.
 */

/* The expression files share one 1080x1080 canvas. */
export const CANVAS = 1080;

/* The circular window (same circle as the baked window assets, 1080 canvas). */
export const WINDOW_CIRCLE = { cx: 540, cy: 540, r: 422.5394 };

/* Named window colours: 10 from the baked window SVGs + rhubarb from the
 * Figma Max avatar example. */
export const WINDOW_COLORS = {
  cream: "#fff7ee",
  mint: "#75e5d4",
  indigo: "#5d359b",
  coral: "#ff7b7b",
  blue: "#76bbff",
  sky: "#87e3ff",
  green: "#a1ff9c",
  amber: "#ffbc69",
  pink: "#ff9cc1",
  rhubarb: "#ffb4d0",
  terracotta: "#e59775",
};

/* Body fill: Brand/400, straight from the Figma bodies. */
export const BODY_DEFAULT_FILL = "#b289df";

/*
 * The "Max avatar" fit: inside a window the body overfills the circle and is
 * cropped by it. faceTarget = where the face centre lands (fraction of the
 * circle diameter); fill = minimum blob overfill vs the diameter (whichever
 * axis needs more wins). Tuned visually against the design reference grid.
 */
export const WINDOW_FIT = {
  faceTarget: { x: 0.55, y: 0.46 },
  fill: { w: 0.85, h: 1.1 },
};

/*
 * The 12 Figma body poses ("Body 1".."Body 12"), in strip coordinates.
 *   d     blob path (strip coords, ~120-170 units per body)
 *   bbox  [x, y, w, h] tight bounds of the blob (sampled)
 *   face  [x, y] face centre = midpoint of the baked default-face eyes
 *   m     [a, b, c, d, e, f] matrix mapping the 1080x1080 expression canvas
 *         onto this body face (rotation + scale + translation, derived by
 *         mapping the expression eye pair onto the baked eye pair)
 */
export const BODIES = {
  1: {
    d: "M39.6318 164.391C28.0034 152.98 31.5892 135.788 31.5733 120.725C31.8394 107.025 28.8707 93.7566 26.0061 80.4203C-0.382734 -30.4548 149.168 23.3546 139.852 101.312C135.861 141.439 78.314 195.359 39.6318 164.391Z",
    bbox: [22.9,17.4,117.4,156.2],
    face: [97.7,74.9],
    m: [0.2383,-0.0292,0.0292,0.2383,-45,-23.1],
  },
  2: {
    d: "M195.053 86.7399C200.443 71.3645 217.529 67.3056 231.157 60.8908C243.672 55.3102 254.422 46.9849 265.277 38.725C354.432 -32.2755 369.268 125.967 294.74 150.659C256.72 164.097 183.457 134.915 195.053 86.7399Z",
    bbox: [193.8,20.6,148.7,133.4],
    face: [287.1,63.9],
    m: [0.2519,0.0048,-0.0048,0.2519,153.4,-58.9],
  },
  3: {
    d: "M465.696 173.932C449.755 170.563 443.534 154.141 435.421 141.45C428.278 129.756 418.64 120.165 409.053 110.462C327.182 31.1721 482.205 -3.87972 516.272 66.856C534.485 102.834 514.961 179.24 465.696 173.932Z",
    bbox: [385.5,28.7,137.5,145.5],
    face: [468.2,63.9],
    m: [0.2519,0.0048,-0.0048,0.2519,334.5,-58.9],
  },
  4: {
    d: "M722.244 104.688C719.107 81.1461 692.503 85.8889 668.504 64.5865C644.506 43.284 615.286 3.18252 575.632 33.2586C535.979 63.3347 547.283 148.941 609.027 157.944C669.197 166.718 726.418 136.016 722.244 104.688Z",
    bbox: [552.5,22.5,170,137],
    face: [645.7,95.4],
    m: [0.2312,0.0044,-0.0044,0.2312,522.9,-17.4],
  },
  5: {
    d: "M740.869 86.7357C746.649 109.772 772.546 102.05 798.8 120.501C825.054 138.952 858.623 175.49 894.62 141.122C930.616 106.753 909.701 22.9752 847.335 21.0142C786.558 19.1034 733.178 56.0812 740.869 86.7357Z",
    bbox: [740.1,21,172.1,134.4],
    face: [817.8,86.4],
    m: [0.2312,0.0044,-0.0044,0.2312,695,-26.4],
  },
  6: {
    d: "M1016.41 17.6759C1035.54 25.6954 1025.41 47.5018 1037.86 72.9551C1050.3 98.4085 1077.4 132.602 1042.89 159.903C1008.37 187.203 938.754 158.13 945.386 102.998C951.848 49.2705 990.936 7.00409 1016.41 17.6759Z",
    bbox: [944.9,16,114.8,154.3],
    face: [989.7,66.1],
    m: [0.2311,0.0044,-0.0044,0.2311,866.9,-46.6],
  },
  7: {
    d: "M1185.77 169.865C1165.48 165.517 1171.41 142.215 1154.48 119.496C1137.56 96.7767 1104.61 68.1737 1133.49 34.9712C1162.37 1.76877 1236.16 17.4905 1239.82 72.8994C1243.39 126.897 1212.77 175.652 1185.77 169.865Z",
    bbox: [1122.1,17.7,118,152.6],
    face: [1195.6,59.6],
    m: [0.2295,0.0785,-0.0785,0.2295,1109.1,-92.5],
  },
  8: {
    d: "M1365.89 169.94C1385.3 162.614 1375.96 140.457 1389.32 115.468C1402.67 90.4794 1430.98 57.2836 1397.47 28.7583C1363.97 0.232985 1293.34 26.7814 1297.99 82.1167C1302.51 136.042 1340.05 179.688 1365.89 169.94Z",
    bbox: [1297.8,17.2,115.5,154.1],
    face: [1361.9,46.7],
    m: [0.2424,0.0094,-0.0094,0.2424,1235.5,-74.2],
  },
  9: {
    d: "M1537.32 17.3908C1517.84 24.5235 1526.96 46.7719 1513.36 71.6275C1499.76 96.4831 1471.12 129.397 1504.34 158.253C1537.57 187.108 1608.45 161.26 1604.35 105.882C1600.36 51.9144 1563.26 7.8989 1537.32 17.3908Z",
    bbox: [1488.9,16.1,115.6,154.1],
    face: [1548.8,70.1],
    m: [0.2308,-0.0129,0.0129,0.2308,1418,-33.2],
  },
  10: {
    d: "M1792.06 126.223C1795.1 105.696 1771.2 103.079 1755.86 79.2579C1740.52 55.4371 1725.29 14.5513 1684.07 29.9503C1642.85 45.3494 1631.69 119.967 1682.29 142.828C1731.61 165.107 1788.01 153.539 1792.06 126.223Z",
    bbox: [1648.6,26.6,143.7,128],
    face: [1711.9,62.4],
    m: [0.2255,-0.0508,0.0508,0.2255,1565.8,-17.9],
  },
  11: {
    d: "M1830.65 115.115C1830.82 94.3642 1854.84 95.4816 1873.68 74.325C1892.53 53.1684 1913.91 15.1361 1952.25 36.7362C1990.59 58.3362 1990.05 133.781 1936.51 148.526C1884.34 162.895 1830.42 142.728 1830.65 115.115Z",
    bbox: [1830.7,30.3,148.5,123],
    face: [1923.3,65.9],
    m: [0.2311,-0.0022,0.0022,0.2311,1797.4,-43.3],
  },
  12: {
    d: "M2030.86 39.8652C2021.12 58.1857 2042.76 68.6601 2049.23 96.2431C2055.7 123.826 2056.36 167.452 2100.35 166.753C2144.35 166.055 2179.87 99.4888 2139.85 60.9939C2100.84 23.4801 2043.83 15.4854 2030.86 39.8652Z",
    bbox: [2028.4,25.9,128.9,140.8],
    face: [2090.3,65.9],
    m: [0.2311,-0.0022,0.0022,0.2311,1964.4,-43.3],
  },
};

/* The 45 expression names (files in /public/romi/characters/expressions/). */
export const EXPRESSIONS = [
  "01-laughing",
  "02-grinning",
  "03-loving",
  "04-neutral",
  "05-meh",
  "06-unimpressed",
  "07-delighted",
  "08-content",
  "09-surprised",
  "10-alarmed",
  "11-shocked",
  "12-sad",
  "13-angry",
  "14-skeptical",
  "15-serene",
  "16-cheerful",
  "17-blissful",
  "18-sheepish",
  "19-concerned",
  "20-winking",
  "21-wincing",
  "22-dismayed",
  "23-flustered",
  "24-gasping",
  "25-sleeping",
  "26-innocent",
  "27-silly",
  "28-cheeky",
  "29-downcast",
  "30-upset",
  "31-crying",
  "32-sobbing",
  "33-yawning",
  "34-drained",
  "35-fed-up",
  "36-dejected",
  "37-weeping",
  "38-tense",
  "39-glum",
  "40-stressed",
  "41-focused",
  "42-smug",
  "43-nervous-laugh",
  "44-weary",
  "45-speechless"
];
