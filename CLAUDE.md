# Neo-Anarchists' Guide Module — Development Notes

FoundryVTT **V13** content module importing the *street gear* from *The
Neo-Anarchists' Guide to Real Life* (FASA 7208) for the **Shadowrun 2nd Edition
system** (`sr2e`). Separate package; depends on the system via `module.json` →
`relationships.systems` (sr2e ≥ 0.10.0).

## What this module is
A gear catalog, not a rules/flavour book. It ships the droppable crunch across
five packs — `na-weapons` (holdout pieces), `na-armor` (designer armor clothing),
`na-gear` (security/surveillance gadgets, credsticks), `na-lifestyles` (coffin
hotels, DocWagon contracts), `na-vehicles` (semiballistic/suborbital transports,
Actor pack). The setting/flavour text is **out of scope** (see `docs/PLAN.md`).

## Source material — SCANNED, no text layer
Render pages and read them (`pdftoppm -r 150 -png`); tesseract is unreliable on
these scans. **Offset: PDF page = book page + 1.** Verify every stat against the
render; when a value is illegible, ask for a high-res capture rather than guess.
`_work/` is git-ignored.

## System contracts (match exactly — see ../sr2e-foundryvtt/module/data/item-data.mjs)
- `weapon`: weaponType, skill, damageCode, damageType, concealability, reach,
  firingModes{ss,sa,bf,fa}, ammo{current,max,type}, recoilComp, ranges, cost…
- `armor`: ballistic, impact, concealability, weight, cost, equipped, isLayered…
- `gear`: see GearData. `lifestyle`: see LifestyleData. `vehicle`: see VehicleData.

## Dedup
Cross-check holdout weapons / gear against the system, **Street Samurai Catalog**
and **Fields of Fire** packs before transcribing — some pieces may already exist.

## Build
`packs-src/` JSON → `npm run build-packs [name]` → `packs/` (gitignored build
artifact — rebuild after editing sources). `npm run validate` first.

## Copyright
*Neo-Anarchists' Guide* / *Shadowrun* are © FASA and rights holders. Personal
table use from an owned PDF; not for distribution. Keep `_work/` out of git.
