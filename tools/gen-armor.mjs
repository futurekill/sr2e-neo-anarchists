// Generate the Neo-Anarchists' Guide designer Armor Clothing (book p.94 table) as
// system `armor` items into packs-src/na-armor. These are layering pieces; some
// have fractional Ballistic/Impact for SR2 layering, but ArmorData's fields are
// integers — we round the field and keep the EXACT rating in notes (isLayered).
// Render-verified. Re-run, then build-packs na-armor.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/na-armor";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("na-armor:" + s).digest("hex").slice(0, 16);

function armorItem(a) {
  const _id = idFor(a.name);
  const frac = (a.bal % 1 !== 0) || (a.imp % 1 !== 0);
  const exact = frac ? ` Exact layering rating: Ballistic ${a.bal} / Impact ${a.imp}.` : "";
  const costNote = a.pkg ? ` Available only as the ${a.pkg} package (${a.pkgCost}¥).` : "";
  return {
    _id, name: a.name, type: "armor", img: "icons/svg/shield.svg",
    system: {
      ballistic: Math.round(a.bal), impact: Math.round(a.imp),
      concealability: a.conceal, weight: a.weight, cost: a.cost ?? 0,
      availability: "", legality: "Legal", equipped: false, isLayered: true,
      notes: `${a.brand} designer armor clothing.${exact}${costNote} Neo-Anarchists' Guide p.94.`
    },
    effects: [], flags: {}, folder: null, sort: 0,
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782300000000, modifiedTime: 1782300000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

const ARMOR = [
  // Armanté
  { name: "Armanté \"Venetian\" Dress", brand: "Armanté", conceal: 14, bal: 1, imp: 0, weight: 0.5, cost: 3500 },
  { name: "Armanté \"Starlight\" Dress", brand: "Armanté", conceal: 13, bal: 1, imp: 1, weight: 0.75, cost: 4500 },
  { name: "Armanté \"Ancien\" Shawl", brand: "Armanté", conceal: 14, bal: 1, imp: 0, weight: 0.3, cost: 750 },
  { name: "Armanté \"Executive Suite\" Tuxedo", brand: "Armanté", conceal: 12, bal: 3, imp: 1, weight: 1, cost: 1100 },
  { name: "Armanté \"London Fog\" Cloak", brand: "Armanté", conceal: 12, bal: 2, imp: 2, weight: 1, cost: 600 },
  // Mortimer of London
  { name: "Mortimer of London \"Greatcoat\"", brand: "Mortimer of London", conceal: 11, bal: 4, imp: 2, weight: 3, cost: 1000 },
  // Vashon Island — Houndstooth (package 2,000¥) + Hunt Ball (package 3,000¥)
  { name: "Vashon Island \"Houndstooth\" Suit Jacket", brand: "Vashon Island", conceal: 14, bal: 1.5, imp: 0.5, weight: 1, cost: 0, pkg: "Houndstooth", pkgCost: 2000 },
  { name: "Vashon Island \"Houndstooth\" Pants", brand: "Vashon Island", conceal: 14, bal: 1, imp: 0.5, weight: 1, cost: 0, pkg: "Houndstooth", pkgCost: 2000 },
  { name: "Vashon Island \"Houndstooth\" Suit Vest", brand: "Vashon Island", conceal: 13, bal: 0.5, imp: 0.5, weight: 0.75, cost: 0, pkg: "Houndstooth", pkgCost: 2000 },
  { name: "Vashon Island \"Houndstooth\" Sports Jacket", brand: "Vashon Island", conceal: 12, bal: 0.5, imp: 1.5, weight: 1.25, cost: 0, pkg: "Houndstooth", pkgCost: 2000 },
  { name: "Vashon Island \"Hunt Ball\" Jacket", brand: "Vashon Island", conceal: 14, bal: 0.5, imp: 1.5, weight: 1, cost: 0, pkg: "Hunt Ball", pkgCost: 3000 },
  { name: "Vashon Island \"Hunt Ball\" Skirt", brand: "Vashon Island", conceal: 14, bal: 0.5, imp: 1, weight: 1, cost: 0, pkg: "Hunt Ball", pkgCost: 3000 },
  { name: "Vashon Island \"Hunt Ball\" Slacks", brand: "Vashon Island", conceal: 14, bal: 1, imp: 0.5, weight: 1, cost: 0, pkg: "Hunt Ball", pkgCost: 3000 },
  // Zoé
  { name: "Zoé \"Retrovision\" Skirt Suit", brand: "Zoé", conceal: 13, bal: 3, imp: 1, weight: 1.5, cost: 2500 },
  { name: "Zoé \"Country Club\" Blazer", brand: "Zoé", conceal: 13, bal: 3, imp: 1, weight: 1, cost: 2000 },
  { name: "Zoé \"Highland Laird\" Kilt", brand: "Zoé", conceal: 14, bal: 4, imp: 2, weight: 1.5, cost: 2000 }
];

let n = 0;
for (const a of ARMOR) {
  const safe = a.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(a.name)}.json`, JSON.stringify(armorItem(a), null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} armor pieces`);
