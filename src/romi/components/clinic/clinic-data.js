/*
 * Shared data for the "Romi for ADHD Clinics" page — a reskin of the legacy
 * /neuronotion-clinics + /clinicpricing pages into the Romi design system.
 *
 * The clinic pitch (to directors, not patients): Romi is white-label
 * infrastructure that supports patients after diagnosis, captures clinical-grade
 * outcome data automatically, and turns post-diagnosis support from a cost
 * centre into a revenue generator that wins NHS / Right to Choose / insurance
 * contracts.
 */

// Clinic discovery call — separate Motion page from the general booking link.
export const CLINIC_DISCOVERY_URL =
  "https://app.usemotion.com/meet/josh-budd/clinicaldisc";

// Pricing tiers. Flat monthly fee per tier covering UNLIMITED patient
// distribution across every pathway (Right to Choose, insurance, private).
// Annual = 10 x monthly (2 months free), matching the corporate page and the
// "2 months free" promise. The rate is locked in for the life of the contract:
// a tier never gets more expensive as the clinic grows.
export const CLINIC_TIERS = [
  { name: "Solo Practitioner", clinicians: "1 clinician", monthly: 100 },
  { name: "Small Practice", clinicians: "2 to 5 clinicians", monthly: 250 },
  { name: "Growing Clinic", clinicians: "5 to 15 clinicians", monthly: 500, popular: true },
  { name: "Established Clinic", clinicians: "15 to 40 clinicians", monthly: 1500 },
  { name: "Enterprise", clinicians: "40+ clinicians", monthly: 4000, priority: true },
];

export const annualFor = (monthly) => monthly * 10; // 2 months free

export const gbp = (n) => "£" + Math.round(n).toLocaleString("en-GB");

// Outcome metrics captured automatically after referral. Used in the hero
// "outcome report" mock and the market-shift dashboard.
export const OUTCOMES = [
  { value: 35, label: "ASRS symptoms" },
  { value: 32, label: "Executive function" },
  { value: 24, label: "Emotional regulation" },
  { value: 32, label: "Sleep hygiene" },
];
