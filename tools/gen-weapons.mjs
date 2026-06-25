// Generate the Neo-Anarchists' Guide "Killer Accessories" holdout weapons (book
// p.30-33) as system `weapon` items into packs-src/na-weapons. Render-verified.
// Damage footnote superscripts in the scan are dropped (e.g. "4L¹" -> "4L").
// The book prints two-part damage for the burst pistol / taser ("4M2 (6L)",
// "8S2 (10S)"); we record the parenthetical SR2 code and note the verbatim value.
// Re-run, then build-packs na-weapons.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/na-weapons";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("na-weapon:" + s).digest("hex").slice(0, 16);

const LIGHT = { short: 5, medium: 15, long: 30, extreme: 50 };
const HEAVY = { short: 5, medium: 20, long: 40, extreme: 60 };
const TASER = { short: 5, medium: 10, long: 15, extreme: 20 };

function weapon(w) {
  const _id = idFor(w.name);
  const fm = { ss: false, sa: false, bf: false, fa: false };
  for (const m of (w.modes ? w.modes.split(",") : [])) fm[m.trim()] = true;
  return {
    _id, name: w.name, type: "weapon", img: "icons/svg/target.svg",
    system: {
      weaponType: "firearm", skill: "firearms", damageCode: w.dmg, damageType: w.dmgType ?? "physical",
      concealability: w.conceal, reach: 0, firingModes: fm,
      ammo: { current: w.ammo, max: w.ammo, type: w.ammoType ?? "pistol" }, recoilComp: 0,
      ranges: w.ranges, strengthMin: 0, weight: w.weight, cost: w.cost,
      availability: w.avail, legality: "Restricted", equipped: false, accessories: [],
      notes: `${w.notes} Street Index ${w.si}. Neo-Anarchists' Guide p.${w.page}.`
    },
    effects: [], flags: {}, folder: null, sort: 0,
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782300000000, modifiedTime: 1782300000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

const WEAPONS = [
  { name: "Fichetti Tiffani Needler", dmg: "4L", conceal: 8, ammo: 4, modes: "sa", ranges: LIGHT, weight: 0.5, cost: 650, avail: "7/48 hrs", si: 3, page: 30,
    notes: "An ultra-fashionable Self-Defender needler pistol firing needle rounds — defenders use Impact Armor. Light-pistol ranges." },
  { name: "Barton Arms Bracer", dmg: "3M", conceal: 2, ammo: 1, modes: "ss", ranges: LIGHT, weight: 0.5, cost: 1300, avail: "12/7 days", si: 3, page: 30,
    notes: "A wrist-mounted single-shot holdout. Adds +1 to all target numbers when fired (conceal 2 refers to the mechanism)." },
  { name: "Barton Arms Gun Cane", dmg: "3M", conceal: 2, ammo: 1, modes: "ss", ranges: LIGHT, weight: 0.5, cost: 500, avail: "10/7 days", si: 3, page: 30,
    notes: "A walking cane with a hidden single-shot pistol — Hold-Out Pistol range. Conceal 0 as a whole cane (also usable as a club)." },
  { name: "Morrissey Élan", dmg: "4L", conceal: 5, ammo: 5, modes: "sa", ranges: LIGHT, weight: 0.5, cost: 500, avail: "8/7 days", si: 3, page: 31,
    notes: "The smallest Morrissey holdout — an elegant polymer pistol. Cannot fire flechette or needle ammo." },
  { name: "Morrissey Elite", dmg: "6M", conceal: 6, ammo: 5, modes: "sa", ranges: LIGHT, weight: 1, cost: 950, avail: "6/48 hrs", si: 2, page: 31,
    notes: "The second Morrissey — fires heavy-pistol ammo but uses light-pistol ranges; underbarrel laser sight." },
  { name: "Morrissey Alta", dmg: "6M", conceal: 6, ammo: 12, modes: "sa", ranges: HEAVY, weight: 1, cost: 1200, avail: "8/48 hrs", si: 2, page: 31,
    notes: "The top of the Morrissey line — a dependable heavy pistol with a laser sight and a recoil-compensation chamber." },
  { name: "Raecor Sting", dmg: "4M", conceal: 9, ammo: 5, modes: "ss", ranges: LIGHT, weight: 0.25, cost: 350, avail: "10/7 days", si: 3, page: 32,
    notes: "A \"lemon-squeezer\" holdout fired from between the fingers — mini-flechette rounds; the polymer body is undetectable by standard metal scanners." },
  { name: "Eichiro Hatamoto II", dmg: "3M", conceal: 5, ammo: 5, modes: "ss", ranges: LIGHT, weight: 0.5, cost: 2000, avail: "12/7 days", si: 2, page: 32,
    notes: "A polymer single-shot personal-defense pistol chambered for shotgun rounds, with a wraparound grip and wrist brace (undetectable by metal scanners). Damage hard to read in the scan — verify." },
  { name: "Fichetti Executive Action", dmg: "6L", conceal: 6, ammo: 24, modes: "sa,bf", ranges: LIGHT, weight: 1.5, cost: 1150, avail: "14/7 days", si: 3, page: 33,
    notes: "A light pistol whose single-stroke trigger throws a tight 3-round burst at ~50 rounds/sec, so the muzzle has no time to climb — the tightest autofire grouping on the market. 24-round clip. Book prints the damage as \"4M2 (6L)\"; recorded as the 6L single-shot value." },
  { name: "Yamaha Pulsar", dmg: "10S", dmgType: "stun", conceal: 5, ammo: 4, ammoType: "taser", modes: "sa", ranges: TASER, weight: 2, cost: 1350, avail: "12/7 days", si: 2, page: 33,
    notes: "A wireless taser firing capacitor-darts (no trailing wires) that deliver a sine-wave discharge to disrupt neural signals. A struck victim resists with a Body Resistance Test (TN 10); failing that, convulsions incapacitate them for 3D6 turns — each success on a further Body Test (TN 8) cuts the incapacitation by one turn. Book prints the damage as \"8S2 (10S) Stun\"; recorded as 10S stun." }
];

let n = 0;
for (const w of WEAPONS) {
  const safe = w.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(w.name)}.json`, JSON.stringify(weapon(w), null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} weapons`);
