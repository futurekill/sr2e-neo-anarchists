# Shadowrun 2E: Neo-Anarchists' Guide to Real Life

A content module for the [SR2E FoundryVTT system](../sr2e-foundryvtt) importing the
*street gear* from *The Neo-Anarchists' Guide to Real Life* (FASA 7208) as
ready-to-drop items and actors: holdout weapons, designer armor clothing, security
& surveillance gear, lifestyles, and semiballistic transports.

The setting/flavour text is **not** imported. Requires the `sr2e` system (≥ 0.10.0)
and is enabled per-world. Private repo — copyrighted FASA content, personal use
only.

## Status
Scaffold. Transcribing the gear by section — Killer Accessories (weapons),
Dressed to Kill (armor), Sharper Image (gear), Coffin Hotels/DocWagon (lifestyles),
Planes & Lifters (transports). See `docs/PLAN.md`.

## Build
```
npm install
npm run validate
npm run build-packs   # packs-src/ JSON -> packs/ LevelDB (close Foundry first)
```
