# Neo-Anarchists' Guide to Real Life — Content Plan

Source: *The Neo-Anarchists' Guide to Real Life* (FASA 7208). **Scanned PDF, no
text layer** — render pages (`pdftoppm -r 150 -png`) and read; verify every stat
against the render. **Offset: PDF page = book page + 1** (book p.2 TOC = PDF p.3).

## Scope
A *street-gear* book: import the droppable crunch only; skip the setting/flavour
text (society commentary, McHugh's, food/restaurants, Matrix iconography, social
consequences). Dedupe against the system + Street Samurai Catalog + Fields of Fire
(some holdout weapons / gear may already exist).

## Batches → packs
1. **Killer Accessories → `na-weapons`** (book p.29-35): holdout/concealed
   pieces — Fichetti Tiffani Needler, Barton Arms gun cane & bracer, Morrissey
   Elan/Elite/Alta, Raecar Sting, Elchiro Hatamoto II, Fichetti Executive Action,
   Yamaha Pulsar. → `weapon` items (weaponType/skill/damageCode/ranges/conceal).
2. **Dressed to Kill → `na-armor`** (book p.35-40): designer armor-clothing lines
   (Armanté, Mortimer of London, Vashon Island, Zoé). → `armor` items
   (ballistic/impact/concealability). Note layering rules in notes.
3. **Sharper Image + Security Systems → `na-gear`** (book p.73-79, 85-90):
   surveillance/security gadgets (display glasses, Fellini-Med breather, door
   alarm, remote ignition, PhoneSecure scanner, white-noise generator, lock-out),
   credsticks, keypads/scanners/detectors. → `gear` items.
4. **Coffin Hotels + DocWagon → `na-lifestyles`** (book p.49-53, 41-47): coffin
   hotel tiers, DocWagon contract tiers. → `lifestyle` items.
5. **Planes & Lifters → `na-vehicles`** (book p.90-92): GD SV250 Semiballistic,
   "China Clipper" Suborbital, "Amov" HSCT. → `vehicle` actors (aircraft).

## Conventions
- Match system item/actor schemas exactly (see `../sr2e-foundryvtt`).
- Original/summarised descriptions; cite the book page.
- `npm run validate` + `npm run build-packs [name]` after each batch.

## Skipped
Setting/flavour: Finding Your Feet, Fringe-of-Space service prose, Eating Fast,
Best of Home Security procedures, One-Way Communication, You Are Your Credstick
narrative, McHugh's, social commentary, the "Reasons" essays.
