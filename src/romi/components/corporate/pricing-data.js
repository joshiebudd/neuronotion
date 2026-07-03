/*
 * Corporate pricing tiers. Flat monthly fee per tier (not per seat) covering
 * unlimited licences for all staff and their families. Rounded to clean price
 * points: £100 / £200 / £500 / £1,000 / £2,000, then custom Enterprise. The
 * per-employee figure shown on the page is derived (monthly / tier max) as an
 * "as little as" rate. Annual = 10 x monthly (2 months free).
 */

export const PILOT_MAILTO =
  "mailto:hello@romiadhd.com?subject=" + encodeURIComponent("Starting our 1-month Romi pilot");

export const ENTERPRISE_MAILTO =
  "mailto:hello@romiadhd.com?subject=" + encodeURIComponent("Romi for enterprise (5,000+ employees)");

export const TIERS = [
  { name: "Starter", range: "1 to 100", min: 1, max: 100, monthly: 100 },
  { name: "Team", range: "100 to 250", min: 100, max: 250, monthly: 200 },
  { name: "Growth", range: "250 to 1,000", min: 250, max: 1000, monthly: 500 },
  { name: "Scale", range: "1,000 to 2,000", min: 1000, max: 2000, monthly: 1000 },
  { name: "Corporate", range: "2,000 to 5,000", min: 2000, max: 5000, monthly: 2000 },
  { name: "Enterprise", range: "5,000+", min: 5000, max: Infinity, monthly: null },
];

// "As little as" per-employee rate: flat fee spread across the top of the band.
export function perEmployee(tier) {
  if (!tier.monthly || !Number.isFinite(tier.max)) return null;
  const pence = Math.round((tier.monthly / tier.max) * 100);
  return pence >= 100 ? `£${(pence / 100).toFixed(2)}` : `${pence}p`;
}

export function tierForHeadcount(headcount) {
  return TIERS.find((t) => headcount <= t.max) ?? TIERS[TIERS.length - 1];
}
