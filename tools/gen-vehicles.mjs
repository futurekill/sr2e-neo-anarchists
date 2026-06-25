// Generate the Neo-Anarchists' Guide "Planes and Crews" transports (book p.90-91)
// as system `vehicle` actors into packs-src/na-vehicles. These are narrative-scale
// civilian airliners (semiballistic / suborbital / HSCT) — speeds are the book's
// kph figures (speed = the first/cruise number; max in notes). Body "2 (6)" stores
// the first value; the structural value is noted. vehicleType aircraft.
// Render-verified. Re-run, then build-packs na-vehicles.
import { writeFileSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";

const DIR = "packs-src/na-vehicles";
mkdirSync(DIR, { recursive: true });
const idFor = (s) => createHash("sha1").update("na-vehicle:" + s).digest("hex").slice(0, 16);

function vehicle(v) {
  const _id = idFor(v.name);
  return {
    _id, name: v.name, type: "vehicle", img: "icons/svg/explosion.svg",
    system: {
      vehicleType: "aircraft", skill: "aircraft",
      handling: v.h, speed: v.s, acceleration: 0,
      body: v.b, armor: v.a, signature: v.sig, pilot: v.p, sensor: 0,
      cargo: 0, load: 0, seating: v.seating, cost: v.cost, availability: "",
      conditionMonitor: { value: 0, max: 10 }, autonav: v.p,
      notes: `<p>${v.desc}</p><p><em>Cruise ${v.s} / max ${v.sMax} kph. Body ${v.b} (${v.bStruct} structural). Min air speed ${v.minAir} kph. Cybernetic vehicle control standard. Neo-Anarchists' Guide p.${v.page}.</em></p>`
    },
    prototypeToken: {
      name: v.name, displayName: 20, actorLink: false, width: 3, height: 2,
      texture: { src: "icons/svg/explosion.svg", scaleX: 1, scaleY: 1 },
      disposition: 0, displayBars: 0
    },
    effects: [], folder: null, sort: 0, flags: {},
    _stats: { coreVersion: "13.351", systemId: "sr2e", systemVersion: "0.1.0", createdTime: 1782300000000, modifiedTime: 1782300000000, lastModifiedBy: null, compendiumSource: null, duplicateSource: null, exportSource: null },
    ownership: { default: 0 }, _key: `!actors!${_id}`
  };
}

const VEHICLES = [
  { name: "General Dynamics SV250 Semiballistic", h: 6, s: 10000, sMax: 29000, b: 2, bStruct: 6, a: 1, sig: 1, p: 4, cost: 750000000, minAir: 250, seating: "Crew 2-8 + 350 passengers", page: 90,
    desc: "A semiballistic airliner — ~110 m long, 35 m wingspan, ~300,000 kg, carrying 350 passengers on sub-orbital hops." },
  { name: "\"China Clipper\" Suborbital", h: 5, s: 10000, sMax: 24000, b: 2, bStruct: 6, a: 0, sig: 1, p: 3, cost: 100000000, minAir: 200, seating: "Crew 2-8 + ~350 passengers", page: 91,
    desc: "A suborbital transport of similar dimensions to the semiballistic — same crew and passenger load, slightly lower ceiling." },
  { name: "\"Arrow\" HSCT", h: 5, s: 1500, sMax: 2900, b: 4, bStruct: 8, a: 1, sig: 2, p: 4, cost: 10000000, minAir: 100, seating: "Crew 2-8 + ~300 passengers", page: 91,
    desc: "A High-Speed Civil Transport — 95 m long, 40 m wingspan, ~335,000 kg, carrying about 300 passengers at high subsonic/supersonic cruise." }
];

let n = 0;
for (const v of VEHICLES) {
  const safe = v.name.replace(/[^A-Za-z0-9]+/g, "_").replace(/^_|_$/g, "");
  writeFileSync(`${DIR}/${safe}_${idFor(v.name)}.json`, JSON.stringify(vehicle(v), null, 2) + "\n");
  n++;
}
console.log(`wrote ${n} transports`);
