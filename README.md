# Button Group

Create Two Buttons To Be Stacked Together — a Gutenberg block by [WPDeveloper](https://wpdeveloper.net).

- **Requires at least:** WordPress 6.0
- **Tested up to:** WordPress 7.0
- **Requires PHP:** 7.4
- **License:** GPL-3.0-or-later

## Development setup

This repository uses git submodules — `controls` (the shared Essential Blocks
controls library) and `lib/style-handler`. A plain `git clone` leaves both
directories empty and the build will fail, so initialise them first:

```bash
git clone --recurse-submodules git@github.com:EssentialBlocks/button-group.git
# or, in an existing checkout:
git submodule update --init --recursive
```

Install dependencies in both the plugin root and the `controls` submodule:

```bash
npm install
cd controls && npm install
```

### Building

Two separate builds produce the shipped bundles in `dist/`:

```bash
npm run build              # builds src/index.js  -> dist/index.js
cd controls && npm run build   # builds config/entries.js -> dist/modules.js, dist/frontend.js
```

The block source in `src/` consumes the controls library through the
`EBButtonGroup` global (named in `config/controlname.json`), which the second
build emits. Running only the root build is not enough.

## Branches

| Branch   | Purpose                                  |
| -------- | ---------------------------------------- |
| `master` | Stable, released code                    |
| `latest` | Staging for the next release             |
| `dev`    | Active development                       |

## Contributors

- [@RahatSheikhLeon](https://github.com/RahatSheikhLeon)

The full list of plugin contributors is maintained in the `Contributors:` header
of [`readme.txt`](readme.txt).
