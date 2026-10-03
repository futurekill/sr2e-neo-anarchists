# Shadowrun 2E: Neo-Anarchists' Guide to Real Life

A Foundry VTT V13 module bringing *The Neo-Anarchists' Guide to Real Life* (FASA 7208) to the [Shadowrun 2nd Edition system](https://github.com/futurekill/sr2e-foundryvtt) (`sr2e`). The book's street gear: holdout weapons, designer armor clothing, security and surveillance gear, lifestyles, and semiballistic transports.

## Contents

| Pack | Contents |
|---|---|
| NAGRL — Weapons | 10 items |
| NAGRL — Armor & Clothing | 16 items |
| NAGRL — Gear | 13 items |
| NAGRL — Transports | 3 actors |

## Notes

- Lifestyles are in the Gear pack.
- The setting and flavour text isn't imported.

## Requirements

- Foundry VTT V13
- The `sr2e` system, version 0.10.0 or later

## Installation

In Foundry, **Add-on Modules → Install Module**, and paste this manifest URL:

```
https://github.com/futurekill/sr2e-neo-anarchists/releases/latest/download/module.json
```

Then enable it in your world (**Game Settings → Manage Modules**).

## Development

`packs-src/` (one JSON file per document) is the source of truth. `packs/` is built from it, gitignored, and rebuilt by the release workflow.

```bash
npm install
npm run build-packs     # packs-src/ JSON -> packs/ LevelDB (close Foundry first)
npm run extract-packs   # pull edits made in Foundry back to packs-src/
npm run validate        # pre-flight checks on the pack sources
npm run lint
```

To release: add a `## X.Y.Z — date` section to `CHANGELOG.md` (the release notes come from it), bump `module.json`, then tag and push `vX.Y.Z`.

## Copyright

*The Neo-Anarchists' Guide to Real Life* and *Shadowrun* are © FASA and their rights holders. This is a fan-made, non-commercial module for personal table use by owners of the book.
