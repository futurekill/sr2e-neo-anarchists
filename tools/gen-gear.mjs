// Generate the Neo-Anarchists' Guide "Sharper Image" gadgets (book p.73-75) as
// system `gear` items into packs-src/na-gear. Render-verified. Prices are the
// catalog's "sale" nuyen. Re-run, then build-packs na-gear.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/na-gear";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("na-gear:" + s).digest("hex").slice(0, 16);

function gear(g) {
  const _id = idFor(g.name);
  return {
    _id, name: g.name, type: "gear", img: "icons/svg/chest.svg",
    system: {
      category: g.cat ?? "electronics", rating: g.rating ?? 0, quantity: 1,
      weight: 0, cost: g.cost, availability: "", legality: "Legal",
      equipped: false, concealability: 0, weaponAccessory: false,
      linkedWeaponId: "", combatTnMod: 0, accessoryRecoilComp: 0, requiresSmartgun: false,
      notes: `${g.notes} Neo-Anarchists' Guide p.${g.page}.`
    },
    effects: [], flags: {}, folder: null, sort: 0,
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782300000000, modifiedTime: 1782300000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!items!${_id}`
  };
}

const GEAR = [
  { name: "Whitelaw Electric Sunglasses", cat: "vision", cost: 250, page: 73,
    notes: "Resin-composite lenses that auto-adjust polarization — even brightness, 99.9% UV/glare/dazzle rejection in bright light (oncoming headlights too) and enhanced contrast/depth at night. Optically perfect; available at diopter strength for vision correction." },
  { name: "Corona \"Private Eye\" Computer Display Glasses", cat: "electronics", cost: 1150, page: 74,
    notes: "Partially-mirrored glasses that display a connected computer or telecom screen visible only to the wearer, blanking the device's own display for privacy." },
  { name: "Fellini-Med Breather", cat: "survival", cost: 450, page: 74,
    notes: "A nose filter/breather that cleans the air — the new model adds electronic precipitation to strip mist, smog and particulates. Geltech energy cell; replacement filters 45¥ each." },
  { name: "Stanley \"Screamer\" Portable Door Alarm", cat: "security", rating: 4, cost: 450, page: 74,
    notes: "A self-contained portable alarm that clips inside any door; a rating-4 vibration sensor detects the characteristic impulses of a key or forced entry and sounds off." },
  { name: "Fujicorp Remote Ignition", cat: "vehicle", cost: 550, page: 74,
    notes: "Starts a vehicle's ignition by remote from up to 30 m, with a personal key-code for security." },
  { name: "DES Systems PhoneSecure Scanner", cat: "security", cost: 150, page: 75,
    notes: "A low-cost tap/bug detector — jack it into a phone's dataline and press TEST; green means clear, red means a tap or bug. (Does not work on cellular lines.)" },
  { name: "Toshiba White-Noise Generator", cat: "security", cost: 1000, page: 75,
    notes: "A miniaturized white-noise generator (fits a ring, belt buckle or pendant) that defeats subvocal/audio surveillance within a one-meter radius." },
  { name: "Doafone Lock-Out", cat: "electronics", cost: 595, page: 75,
    notes: "A call-blocker for cellular/landline phones — \"exclusion\" mode accepts calls only from approved numbers and disconnects the rest. Works with major cellular designs and modems." }
];

let n = 0;
for (const g of GEAR) {
  const safe = g.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(g.name)}.json`, JSON.stringify(gear(g), null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} gear items`);
