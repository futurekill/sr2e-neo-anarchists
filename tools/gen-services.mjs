// Generate NAGRL "real life" services into the existing na-gear pack: the coffin
// hotel (a `lifestyle` item) and the four DocWagon contract tiers (`gear` items,
// cost = annual fee). An Item compendium holds any subtype, so these share na-gear
// rather than a thin standalone pack. Render-verified (book p.42-44, 49-51, 102).
// Re-run, then build-packs na-gear.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/na-gear";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("na-service:" + s).digest("hex").slice(0, 16);
const stats = { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782300000000, modifiedTime: 1782300000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null };

function lifestyle(l) {
  const _id = idFor(l.name);
  return {
    _id, name: l.name, type: "lifestyle", img: "icons/svg/house.svg",
    system: { level: l.level, monthlyCost: l.monthlyCost, monthsPaid: 1, description: "", notes: l.notes },
    effects: [], flags: {}, folder: null, sort: 0, _stats: stats, ownership: { default: 0 }, _key: `!items!${_id}`
  };
}
function service(s) {
  const _id = idFor(s.name);
  return {
    _id, name: s.name, type: "gear", img: "icons/svg/regen.svg",
    system: {
      category: "service", rating: 0, quantity: 1, weight: 0, cost: s.cost,
      availability: "", legality: "Legal", equipped: false, concealability: 0,
      weaponAccessory: false, linkedWeaponId: "", combatTnMod: 0, accessoryRecoilComp: 0, requiresSmartgun: false,
      notes: `${s.notes} Annual fee. Neo-Anarchists' Guide p.${s.page}.`
    },
    effects: [], flags: {}, folder: null, sort: 0, _stats: stats, ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

const docs = [];
docs.push(lifestyle({
  name: "Coffin Hotel (Cubicle)", level: "low", monthlyCost: 900,
  notes: "A bed-sized capsule — thin mattress, reading lights, a limited-function telecom, flat trideo, climate controls and (sometimes) a simsense player, all activated by inserting a credstick. Amenities are pay-per-use (a local call 1-5¥, telecom ~5¥/hr). Roughly 30¥/night. Security: the cubicle gives those inside Barrier Rating 12 and is locked by a Rating-3 print-scanner maglock; the hotel computer is Rating 4 with Blaster-3 / Trace / Dump-4 IC. Neo-Anarchists' Guide p.49-51, 102."
}));

const DOCWAGON = [
  { name: "DocWagon Basic Service Contract", cost: 5000, page: 43,
    notes: "Straight pay-per-service: the client (or estate) is liable for the full cost of every service except standard High Threat Response, which the annual fee covers." },
  { name: "DocWagon Gold Service Contract", cost: 25000, page: 43,
    notes: "One free resuscitation per year and a 10% discount on acute and extended care; HTR base cost reduced to 2,500¥. Other HTR-associated costs (expenses, death compensation) unchanged." },
  { name: "DocWagon Platinum Service Contract", cost: 50000, page: 43,
    notes: "Free High Threat Response and four free resuscitations per year, plus a 50% discount on acute and extended care; the client pays only death compensation for employees and bystanders." },
  { name: "DocWagon Super-Platinum Service Contract", cost: 100000, page: 44,
    notes: "All Platinum benefits plus free employee death benefits and five free resuscitations per year. The wristband carries a life-signs monitor and locator that automatically calls HTR when vitals leave safe parameters. Available only on request." }
];
for (const d of DOCWAGON) docs.push(service(d));

let n = 0;
for (const doc of docs) {
  const safe = doc.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${doc._id}.json`, JSON.stringify(doc, null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} services (1 lifestyle + ${DOCWAGON.length} DocWagon)`);
