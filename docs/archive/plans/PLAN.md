# Neo-Anarchists' Guide to Real Life — Content Plan

Source: *The Neo-Anarchists' Guide to Real Life* (FASA 7208). **Scanned PDF, no
text layer** — render pages (`pdftoppm -r 150 -png`) and read; verify every stat
against the render.

⚠️ **The PDF↔book offset DRIFTS** — many unnumbered full-page art ads push the PDF
ahead of the book. It's +1 early (book p.30 weapons = PDF p.31) but +9 by the
rules appendix (book p.86 = PDF p.95; book p.94 armor table = PDF p.103, book p.95
DocWagon = PDF p.104). **Navigate by the page-number header in the top-right of
each rendered page, NOT a fixed offset.** The crunch stat tables live in the rules
appendix (book p.85-103); the front sections (p.30-79) are mostly art ads.

## Done (v0.2.0 — complete)
- ✅ `na-weapons` — 10 Killer Accessories holdouts (book p.30-33), incl. Fichetti
  Executive Action + Yamaha Pulsar (book p.33 text page = PDF 42, buried after the
  art gallery; the burst pistol/taser print two-part damage "4M2 (6L)"/"8S2 (10S)").
- ✅ `na-armor` — 16 designer pieces (Armor Clothing table, book p.94).
- ✅ `na-gear` — 8 Sharper Image gadgets + the coffin-hotel lifestyle + 4 DocWagon
  contract tiers (folded in here rather than a thin standalone `na-lifestyles`).
- ✅ `na-vehicles` — 3 transports (Planes & Lifters, book p.90-91).

The remaining book content is setting/flavour (out of scope): security-system
infrastructure (keypads/scanners as facility gear), McHugh's, social commentary.

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
