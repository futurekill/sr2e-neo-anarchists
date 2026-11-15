# QA plan — Neo-Anarchists' Guide to Real Life

Manual checks for a live Foundry world with the sr2e system and this module enabled.

## 0. Offline
- [ ] `npm run validate` passes (pack shape + every catalog entry cites its page); `npm run lint` is clean.

## 1. Compendia
- [ ] The four packs (Weapons, Armor & Clothing, Gear, Transports) open; every entry shows its art and its page badge (sr2e 0.156.0+).

## 2. Weapons (pp.30–33)
- [ ] Each weapon's damage code is the **SR2** code, not the 1st-edition one printed beside it.
- [ ] **Eichiro Hatamoto II** is single-shot: 1 round, ranges 10/20/50/100.
- [ ] **Yamaha Pulsar** is a taser: 4 shots, ranges 5/10/12/15 (core p.88 Taser row).
- [ ] Every weapon carries a Street Index, so the Buy dialog prices it off-list.

## 3. Armor, gear and transports
- [ ] The designer clothing (Armanté, Mortimer of London, Vashon Island, Zoé) equips with its Ballistic/Impact.
- [ ] The coffin-hotel lifestyle and Sharper Image gadgets drop into the gear tab.
- [ ] The three transports (SV250, China Clipper, Arrow) drag onto a scene; their stat lines match the book (vehicle audit, 0.3.3).
