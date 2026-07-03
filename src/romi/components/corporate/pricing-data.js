/*
 * Corporate pricing tiers. Priced at the median headcount of each tier with a
 * per-employee rate that starts at £1/employee/month and falls with scale,
 * landing on the headline "£50/month per 100 employees" rate at the top paid
 * tier. Annual = 10 x monthly (2 months free). PLACEHOLDER numbers below the
 * two Josh set explicitly (£100 and £175) - flagged for review before launch.
 */

export const PILOT_MAILTO =
  "mailto:hello@romiadhd.com?subject=" + encodeURIComponent("Starting our 1-month Romi pilot");

export const ENTERPRISE_MAILTO =
  "mailto:hello@romiadhd.com?subject=" + encodeURIComponent("Romi for enterprise (5,000+ employees)");

export const TIERS = [
  { name: "Starter", range: "1-100", min: 1, max: 100, monthly: 100, perEmployee: "£2.00" },
  { name: "Team", range: "100-250", min: 100, max: 250, monthly: 175, perEmployee: "£1.00" },
  { name: "Growth", range: "250-1,000", min: 250, max: 1000, monthly: 500, perEmployee: "£0.80" },
  { name: "Scale", range: "1,000-2,000", min: 1000, max: 2000, monthly: 975, perEmployee: "£0.65" },
  { name: "Corporate", range: "2,000-5,000", min: 2000, max: 5000, monthly: 1750, perEmployee: "£0.50" },
  { name: "Enterprise", range: "5,000+", min: 5000, max: Infinity, monthly: null, perEmployee: null },
];

export function tierForHeadcount(headcount) {
  return TIERS.find((t) => headcount <= t.max) ?? TIERS[TIERS.length - 1];
}
