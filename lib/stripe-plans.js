export const stripePlans = {
  "one-time-session": {
    name: "One-Time Coaching Session",
    priceId: "price_1TsjgoPdPNxXFpRCFK3lrNMS",
    mode: "payment",
  },
  "rebuild-paid-in-full": {
    name: "The Confidence Rebuild — Paid in Full",
    priceId: "price_1TsjWOPdPNxXFpRCaCtpA44b",
    mode: "payment",
  },
  "rebuild-payment-plan": {
    name: "The Confidence Rebuild — 3-Payment Plan",
    priceId: "price_1TsjuOPdPNxXFpRCUX3btCU1",
    mode: "subscription",
    installments: 3,
  },
  "reclamation-paid-in-full": {
    name: "The Confidence Reclamation — Paid in Full",
    priceId: "price_1TsjWPPdPNxXFpRC1p95tQHD",
    mode: "payment",
  },
  "reclamation-payment-plan": {
    name: "The Confidence Reclamation — 4-Payment Plan",
    priceId: "price_1TsjqAPdPNxXFpRCbPn7OJty",
    mode: "subscription",
    installments: 4,
  },
  "growth-membership": {
    name: "Growth Membership",
    priceId: "price_1TsjWPPdPNxXFpRCpyblyClX",
    mode: "subscription",
  },
};

export function getStripePlan(planKey) {
  return stripePlans[planKey] || null;
}
