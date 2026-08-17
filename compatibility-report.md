# Button Group — PHP / WordPress Compatibility Report

- **Plugin:** Button Group (`button-group`)
- **Version:** 1.2.6 → **1.5.0**
- **Branch:** `button-group-dev` (created off `latest`, not `master` — see note below)
- **Date of pass:** 2026-08-09
- **Nothing committed or pushed.** All changes left in the working tree for review.

> **Branch base note.** The skill's default is to branch off `master`, but `master`
> is stale here: it sits at v1.2.4 / "Tested up to 6.1" and does not contain the
> 1.2.5 or 1.2.6 work. `latest` is the live development line (v1.2.6) and matches
> the working tree. Confirmed with the user; branched off `latest`.

---

## 1. Detected original baseline

Header and readme values are claims; these are the versions the **code** actually
implies.

### PHP — detected original floor: **5.6**

| Evidence | File | Implies |
|---|---|---|
| `[ ... ]` short array syntax throughout | `button-group.php:41,62,71` | PHP 5.4+ |
| Closure passed as `render_callback` | `button-group.php:126` | PHP 5.3+ |
| `array()` long syntax in all `includes/` files | `includes/*.php` | 5.x-era style |
| No `??`, `<=>`, return types, nullable types, typed properties, arrow fns, `match`, ctor promotion | — | **not** 7.x/8.x code |
| `throw new Error(...)` | `button-group.php:35` | 7.0+ **(outlier — see #5)** |
| `str_contains(...)` | `includes/helpers.php:44` | 8.0+ **(outlier — see #11)** |

The body of the plugin is plainly PHP 5.4/5.6-era code. Two calls
(`Error`, `str_contains`) were introduced later without a corresponding floor
bump, so the plugin *silently* required PHP 8.0 while advertising nothing. That
mismatch is the single most serious finding in this pass.

### WordPress — detected original floor: **5.6**

| Evidence | File | Implies |
|---|---|---|
| `get_block_register_path()` branches explicitly for `<= 5.6`, returning the block **name** | `includes/helpers.php:80` | Deliberate WP 5.6 support |
| `register_block_type( <directory path> )` | `button-group.php:121` | WP 5.8+ (path form) |
| `block.json` with `"apiVersion": 2` | `block.json:2` | WP 5.6+ (apiVersion 2 landed in 5.6) |
| `WP_Block_Type_Registry::is_registered()` | `button-group.php:120` | WP 5.0+ |
| `register_meta( 'post', ..., show_in_rest )` | `includes/post-meta.php:20` | WP 4.9+ |
| No REST routes, no `wp_interactivity_*`, no 6.x-only APIs | — | ceiling not pinned by code |

### Declared vs. detected

| Field | Declared before | Detected reality |
|---|---|---|
| Plugin header `Requires at least` | **absent** | 5.6 |
| Plugin header `Requires PHP` | **absent** | 8.0 as-written / 5.6 as-intended |
| Plugin header `Tested up to` | **absent** | — |
| `readme.txt` `Requires at least` | 5.6 | 5.6 ✔ |
| `readme.txt` `Tested up to` | 6.5 | stale by 5 majors |
| `readme.txt` `Requires PHP` | **absent** | 8.0 as-written |

**They disagree.** The plugin header carried no compatibility metadata at all,
and the readme claimed a PHP-agnostic WP 5.6 floor that the code could not honour.

---

## 2. Target range

Live version check performed **2026-08-09**:

- `https://www.php.net/releases/index.php?json&max=3` → **PHP 8.5.9**; actively
  supported branches: 8.2, 8.3, 8.4, 8.5.
- `https://api.wordpress.org/core/version-check/1.7/` → **WordPress 7.0.3**.

**Declared target: PHP 7.4 → 8.5, WordPress 6.0 → 7.0, inclusive.**

The floor is the **policy minimum (PHP 7.4 / WP 6.0)**, which is higher than the
detected original (PHP 5.6 / WP 5.6) and therefore wins.

The audit itself was walked against the *detected* range, so everything below
PHP 7.4 / WP 6.0 was still checked and fixed. Those fixes are retained — they are
harmless above the floor, and they keep the plugin working for anyone who
sideloads it onto an older stack despite the declared requirement.

Per-version checklist actually walked:

- **PHP:** 5.6, 7.0, 7.1, 7.2, 7.3, **7.4**, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5
- **WordPress:** 5.6, 5.7, 5.8, 5.9, **6.0**, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 7.0

(Bold = the declared floor. Earlier entries were audited but are no longer
supported commitments.)

Note that WordPress has now crossed into **7.x**. Any `(float)` cast of the core
version string is a live hazard from here on — see issue #14.

---

## 3. Issue table

Severity: **Critical** = fatal / site down · **High** = feature broken or fatal
under a reachable condition · **Medium** = warning, notice, or hygiene ·
**Low** = cosmetic or latent.

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `includes/helpers.php:44` | `str_contains()` is PHP 8.0+. WordPress only polyfills it from WP 5.9, so on WP 5.6–5.8 with PHP < 8.0 this is an undefined-function **fatal**. Reached on any `themes.php` request. | PHP < 8.0 | **Critical** |
| 2 | `button-group.php:26` | `require_once` of `lib/style-handler/style-handler.php` with no existence guard. The path is a **git submodule and is currently empty** in this checkout — loading the plugin fatals the entire site. | All versions | **Critical** |
| 3 | `button-group.php:35` | `throw new Error(...)` from an `init` callback when `dist/index.asset.php` is missing. Uncaught → WSOD on the whole site. On PHP 5.x the `Error` class does not exist, so it fatals for a second reason. | All (PHP 5.x doubly) | **Critical** |
| 4 | `includes/helpers.php:46` | `$x = include_once <file>` returns bool `true`, not the array, if the file was already included. `array_merge(true, ...)` is a `TypeError` **fatal** on PHP 8.0+; an "array offset on bool" warning before that. | PHP 8.0+ | **High** |
| 5 | `includes/helpers.php:80` | `get_block_register_path()` returns the directory **path** for anything above WP 5.6, but `register_block_type()` only accepts a path from **WP 5.8**. On WP 5.7 the block registers under a garbage name and never appears. | WP 5.7 | **High** |
| 6 | `includes/helpers.php:80` | Same line: `(float) get_bloginfo('version') <= 5.6`. `(float) '5.10'` is `5.1`, so any x.10+ release takes the wrong branch. | WP x.10+ | **High** |
| 7 | `button-group.php:29-31` | `define()` calls live *inside* the `init` callback, so `BUTTONGROUP_BLOCK_*` are undefined for anything running before `init` — an undefined-constant `Error` on PHP 8.0+ rather than a notice. | PHP 8.0+ | **Medium** |
| 8 | `button-group.php:1` | Main plugin file has no `if ( ! defined( 'ABSPATH' ) ) exit;` guard (the three `includes/` files do). Direct HTTP access executes the file. | All versions | **Medium** |
| 9 | `button-group.php:4-14` | Header declares no `Requires at least`, `Requires PHP`, or `Tested up to`. WordPress therefore cannot block installation on an unsupported stack — which is what makes #1 and #3 reachable by users. | All versions | **High** |
| 10 | `readme.txt:5` | `Tested up to: 6.5` — five majors stale; no `Requires PHP` field. | All versions | **Medium** |
| 11 | `includes/helpers.php:44` | `$_SERVER['QUERY_STRING']` read unsanitized and unslashed. | All versions | **Medium** |
| 12 | `includes/font-loader.php:49` | `explode( ',', $fonts )` where `$fonts` comes from `get_post_meta()`. Post meta is untyped; a non-string value is a `TypeError` **fatal** on PHP 8.0+ (a warning before). | PHP 8.0+ | **Medium** |
| 13 | `button-group.php:41,54` | `$script_asset['dependencies']` / `['version']` accessed with no shape check. A truncated or hand-edited asset file yields `array_merge(null, ...)` → `TypeError`. | PHP 8.0+ | **Medium** |
| 14 | `includes/helpers.php:59` | `'eb_wp_version' => (float) get_bloginfo('version')` sent to JS. Same lossy cast as #6. **Not auto-fixed** — see §5. | WP x.10+ | **Medium** |
| 15 | `includes/post-meta.php:11` | `add_filter( 'init', ... )` used where `init` is an action. Functionally equivalent in WP's shared hook registry, but semantically wrong and misleading. | None (latent) | **Low** |
| 16 | `includes/helpers.php:49,78` | `plugin_dir_url()` already returns a trailing slash; concatenating `'/dist/...'` emits a `//` double slash in the enqueued URL. | None (cosmetic) | **Low** |
| 17 | `includes/font-loader.php:78` | `wp_register_style( 'eb-block-fonts', ..., array() )` omits `$ver`, so WordPress appends its own core version as the cache-buster. | None (cosmetic) | **Low** |
| 18 | `assets/js/eb-animation-load.js:28` | `DOMNodeInserted` is a legacy Mutation Event, **removed in Chrome 127+ (Jul 2024) and Firefox 130+**. The editor's animation-preview listener is silently dead in every current browser. The same handler also re-bound a fresh `change` listener on every mutation — an unbounded listener leak while the editor is open. | Chrome 127+, FF 130+ | **High** |
| 19 | `button-group.php:124-125` | `register_block_type()` args use singular `editor_script` / `editor_style`, soft-deprecated in WP 6.1 in favour of `editor_script_handles` / `editor_style_handles`. Core's shim still maps them. **Not auto-fixed** — see §5. | WP 6.1+ (notice only) | **Low** |
| 20 | `block.json:2` | `"apiVersion": 2`. v3 has been available since WP 6.3 and is what enables the iframed editor canvas. **Not auto-fixed** — see §5. | — | **Low** |
| 21 | `controls/` (submodule) | Submodule is uninitialised/empty. `config/entries.js` imports every control from `../controls/src/...`, so `npm run build` cannot succeed in this checkout. Build-time only; shipped `dist/` is intact. **Not auto-fixed** — see §5. | Build only | **Medium** |

---

## 4. Fixes applied

Mapped 1:1 to the table above.

| # | Fix |
|---|---|
| 1 | `str_contains($qs, 'gutenberg-edit-site')` → `strpos($qs, 'gutenberg-edit-site') !== false`. Identical result, works on PHP 5.6 through 8.5, no polyfill needed. |
| 2 | Wrapped the style-handler `require_once` in `file_exists()`. Packaged releases (where the submodule is populated) are unaffected; a fresh clone no longer takes the site down. |
| 3 | Replaced `throw new Error(...)` with a plain `return`. A missing build already means the block cannot work; bailing degrades to "block absent" instead of "entire site down", and removes the PHP 5.x `Error`-class dependency. |
| 4 | `include_once` → `include` for `dist/modules.asset.php`, plus a `file_exists()` pre-check and an `is_array()` shape check before `array_merge()`. |
| 5 | `get_block_register_path()` threshold moved from `<= 5.6` to `< 5.8`, matching the actual WordPress release that added path-based `register_block_type()`. WP 5.7 now registers correctly. |
| 6 | Same function: `(float)` cast replaced with `version_compare( get_bloginfo('version'), '5.8', '<' )`. Results are identical on every WP release to date and correct on future x.10+ releases. |
| 7 | The three `define()` calls moved to file scope, each wrapped in `! defined()`. They are now available from plugin load rather than from `init`, and a double-call cannot emit a redefine notice. `plugin_dir_url()` is safe at this point — `wp-includes` is fully loaded before plugins. |
| 8 | Added `if ( ! defined( 'ABSPATH' ) ) { exit; }` to `button-group.php`. |
| 9 | Header now declares `Requires at least: 6.0`, `Requires PHP: 7.4`, `Tested up to: 7.0`. |
| 10 | `readme.txt`: `Requires at least: 6.0`, `Tested up to: 7.0`, added `Requires PHP: 7.4`, `Stable tag: 1.5.0`, plus a 1.5.0 changelog entry. |
| 11 | `$_SERVER['QUERY_STRING']` now `sanitize_text_field( wp_unslash( ... ) )` behind an `isset()` guard. |
| 12 | Added `is_string( $fonts )` to the guard before `explode()`. |
| 13 | Added `is_array()` checks on the asset array and its `dependencies` key; `version` falls back to `BUTTONGROUP_BLOCK_VERSION` when absent. |
| 15 | `add_filter( 'init', ... )` → `add_action( 'init', ... )`. |
| 16 | Removed the leading slash from both `dist/` concatenations. The `<script src>` / `<link href>` attributes lose a redundant `//`; same file, same cache-buster. |
| 17 | Passed `BUTTONGROUP_BLOCK_VERSION` as `$ver` for the Google Fonts style handle. |
| 18 | `DOMNodeInserted` replaced with a `MutationObserver` on `document.body`, plus an immediate first call so an already-present control binds without waiting for a mutation. Also guarded so the `change` listener binds **once per element** instead of on every mutation — the previous duplicate handlers were idempotent, so no visible behaviour changes. |

**Version bumped 1.2.6 → 1.5.0 (minor, set by the user)**, synchronised across `button-group.php`
header, `BUTTONGROUP_BLOCK_VERSION`, `package.json`, and `readme.txt` `Stable tag`.

---

## 5. Flagged, NOT auto-fixed — your decision

**a. `eb_wp_version` float cast** (issue #14, `includes/helpers.php:88`)

The controls bundle consumes this value numerically. Decompiled from
`dist/modules.js`:

```js
n = i.eb_wp_version;  …  n >= 5.8 ? registerBlockType({name: a, …}) : registerBlockType(`${a}`, …)
```

Changing the localized value to a string would break that comparison outright, so
I left the cast intact and documented it inline. It is **currently harmless** —
the only comparison is `>= 5.8`, and no WP release has ever had a minor of 10 or
higher, so every real version evaluates correctly. It becomes wrong the day
WordPress ships a `7.10`.

*Recommendation:* fix it in the `controls` submodule (pass the raw version string
and compare with a proper semver helper), then update every consuming plugin
together. Out of scope for a single-plugin pass.

**b. `editor_script` / `editor_style` singular args** (issue #19)

Soft-deprecated in WP 6.1. Core's back-compat shim maps them to the `*_handles`
arrays and there is no notice at the default error level. Switching to
`editor_script_handles` would **drop WP 5.6–6.0 support**, since those releases do
not understand the plural form. Given the declared 5.6 floor, keeping the singular
form is correct. Revisit only if you raise the WP floor to 6.1+.

**c. `block.json` `apiVersion: 2`** (issue #20)

v3 (WP 6.3+) is what opts the block into the iframed editor canvas. Bumping it
changes how the block renders inside the editor and can expose styling
assumptions — a real behaviour change, not a compatibility fix. Left alone.

*Recommendation:* worth doing, but as its own change with visual QA.

**d. Empty `controls` submodule** (issue #21)

`config/entries.js` imports ~15 modules from `../controls/src/...` and that
directory is empty, so `npm run build` will fail in this checkout. The shipped
`dist/` bundles are present and current, so runtime is unaffected and I did not
regenerate any build output. Run `git submodule update --init --recursive` before
your next build.

**e. Should the PHP floor be raised? — RESOLVED**

Originally declared `Requires PHP: 5.6` / `Requires at least: 5.6`, matching what
the code honestly supported after the fixes, and flagged as a product call.

**Now settled:** raised to **`Requires PHP: 7.4`** and **`Requires at least: 6.0`**
per the team's policy minimum, at the user's instruction on 2026-08-09.

Consequences worth noting:

- Two fixes from §4 now guard versions below the declared floor and are
  effectively dead code: #1 (`str_contains` → `strpos`, only mattered under PHP
  8.0) and #5/#6 (the WP 5.7 / `< 5.8` block-registration branch). Both are
  **retained** — they cost nothing, and `strpos()` is not worse than
  `str_contains()` on any version.
- Anyone on PHP < 7.4 or WP < 6.0 will now be blocked from installing or updating
  rather than silently running a partly-broken plugin. That is the intended
  outcome, but it does cut off existing installs on old stacks.

---

## 6. Old-vs-new conflicts

One genuine tension, and it resolved cleanly rather than forcing a trade-off:

- **`str_contains()` vs. the WP 5.6 floor.** The convenient modern call is PHP
  8.0+, and WordPress only polyfills it from 5.9 — so it was unusable across the
  declared range. `strpos() !== false` is exactly equivalent, available since PHP
  4, and carries no downside on modern versions. No compromise required.

No case in this plugin forced choosing between the old floor and the modern top.

---

## 7. Final declared compatibility

| Field | Value |
|---|---|
| `Requires at least` | **6.0** |
| `Tested up to` | **7.0** |
| `Requires PHP` | **7.4** |
| `Stable tag` / `Version` | **1.5.0** |

Declared consistently in both `button-group.php` and `readme.txt` (the header
previously declared none of the three).

Floors set to the policy minimum (PHP 7.4 / WP 6.0) rather than the detected
original (PHP 5.6 / WP 5.6) — see §5e.

---

## 8. Verification performed

**`php -l` across every PHP file** (PHP 8.5.8 CLI), after all edits:

```
No syntax errors detected in ./button-group.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
```

**Deprecated / removed-API sweep** — `str_contains`, `str_starts_with`,
`str_ends_with`, `array_is_list`, `create_function`, `each()`, `money_format`,
`ereg*`, `FILTER_SANITIZE_STRING`, `strftime`, `utf8_encode/decode`,
`(float) get_bloginfo`, `throw new Error`: **no live hits remain.** The only
matches are an explanatory comment and the deliberately-retained `eb_wp_version`
cast documented in §5a.

**Post-5.6 syntax sweep** — `??`, `?->`, `fn()`, `<=>`, `match()`, `readonly`,
`enum`, return types, typed properties: **no matches** in `button-group.php` or
`includes/`. The declared PHP 5.6 floor is syntactically honest.

**`node --check assets/js/eb-animation-load.js`** — passes.

**`phpcs`** — not installed on this machine (`phpcs -i` → command not found).
Skipped per the skill's rule against installing global tooling unprompted.

**Not verified:** no runtime execution against live WordPress installs. The
version-range reasoning is static analysis against release history, not
integration testing. `dist/` bundles were not regenerated (see §5d).
