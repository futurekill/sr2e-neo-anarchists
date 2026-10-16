# Changelog

## 0.3.2 — 2026-10-16

### Fixed — every weapon checked against the book (pp.30–33)
- **Damage codes:** the book prints each code twice, the 1st-edition code and the SR2
  code in brackets ("4L1 (5L)"). Six weapons had the 1st-edition code: Tiffani Needler
  **5L**, Barton Arms Bracer and Gun Cane **6L**, Morrissey Élan **5L**, Morrissey
  Elite and Alta **9M** (they were 6M), Eichiro Hatamoto II **8S**.
- **Eichiro Hatamoto II** was wrong almost throughout: it's a single-shot (1 round)
  shotgun-pistol, concealability 6, 2.5 kg, 1,200¥ (was 5 rounds, 0.5 kg, 2,000¥), with
  shotgun ranges (10/20/50/100 m).
- **Barton Arms Bracer:** concealability 7, 0.3 kg. **Gun Cane:** 1 kg. **Raecor
  Sting:** 375¥.
- **Street Index:** every weapon had none (so it sold at list price on the street); each
  now has the printed index.
- With sr2e 0.104.3 or later, copies already in your world get the new damage, Hatamoto
  stats and ranges when it loads (unless you changed that stat). Prices and weights of
  copies you already own don't change.

## 0.3.1 — 2026-10-16

### Fixed
- **Yamaha Pulsar range brackets**: 5/10/12/15 m, the core book's Taser row (p.88; its entry is typed Taser, p.33), not 5/10/15/20. With sr2e 0.104.2 or later, copies already in your world are corrected automatically when it loads (unless you edited the range by hand).

## 0.3.0 — 2026-07-26

### Added
- Custom art for all 42 documents, replacing Foundry's stock icons:
  - designer armour as couture pieces on mannequins;
  - gadgets and DocWagon cards as glossy retail products;
  - concealed hold-out weapons with only a subtle tell;
  - the coffin-hotel lifestyle;
  - top-down tokens for the three high-speed airliners.

### Fixed
- Releases no longer package `.DS_Store` files.

## 0.2.0 — Real life

Completes the catalog — **42 items across 4 packs**, render-verified:
- **na-weapons** (10): the eight Killer Accessories holdouts plus the **Fichetti
  Executive Action** (3-round-burst light pistol) and **Yamaha Pulsar** (wireless
  capacitor-dart taser, 10S stun w/ Body-Test incapacitation).
- **na-armor** (16): Armanté / Mortimer of London / Vashon Island / Zoé.
- **na-gear** (13): 8 Sharper Image gadgets + a coffin-hotel lifestyle + the four
  DocWagon contract tiers (Basic 5k / Gold 25k / Platinum 50k / Super-Platinum
  100k ¥-per-year).
- **na-vehicles** (3): semiballistic / suborbital / HSCT transports.

The standalone `na-lifestyles` pack was dropped — its two items (coffin hotel,
DocWagon) live in `na-gear`. Remaining book content is setting/flavour and
facility infrastructure, out of scope. Requires sr2e ≥ 0.10.0.

## 0.1.0 — Street gear

First release: 35 items (weapons, armor, gear, transports).
