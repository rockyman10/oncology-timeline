# Oncology trials

A static teaching timeline of landmark randomized oncology drug trials for pharmacy residents, pharmacy students, and clinicians.

The page is plain HTML, CSS, and JavaScript. There is no build step. It is meant to be published with GitHub Pages from the `main` branch, root folder.

Phase 1 covers randomized anticancer drug trials in solid tumors on four lanes: breast, lung (non-small-cell and small-cell), colorectal, and prostate cancer. It has 48 full trial cards and 10 link-only stubs. Every number on a full card was read from the PubMed abstract of the cited paper, and `sourceNotes` on each card records where. Sourcing notes for this pass are in `docs/sources-phase1.md`.

A fifth lane holds 10 link-only stubs for cancer-associated thrombosis trials (CLOT, CATCH, Hokusai VTE Cancer, SELECT-D, AVERT, CASSINI, ADAM-VTE, Caravaggio, CANVAS, and API-CAT). Each opens its card on the anticoagulation timeline and carries no result text.

Planned build order after phase 1: hematologic malignancies (leukemia, lymphoma, myeloma), then a later immunotherapy phase for other immunotherapy trials, then supportive care.

`js/data/questions.js` holds three unofficial BCOP-style example questions written from the cited abstracts. They are not from the BCOP examination.

This site is a sister teaching timeline to [anticoag-timeline](https://github.com/rockyman10/anticoag-timeline), [antiplatelet-timeline](https://github.com/rockyman10/antiplatelet-timeline), and [critcare-timeline](https://github.com/rockyman10/critcare-timeline). The page shell follows those sites. Trial text is written here from primary sources. Do not paste clinical prose from the other repositories.

## Open locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. `index.html` also opens directly in a browser.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Page shell: timeline, Teach menu, dialogs, footer |
| `css/site.css` | Marine-blue theme, timeline, dialogs, phone layout |
| `js/app.js` | Timeline, trial snapshot, learn path, practice engine |
| `js/site-meta.js` | Educational notice, empty `reviewedBy`, last literature sweep, abbreviation key |
| `js/data/topics.js` | Lane names |
| `js/data/trials.js` | Trial cards |
| `js/data/questions.js` | Unofficial BCOP-style example items |
| `js/learn-path.js` | Short orientation path |
| `scripts/verify-integrity.js` | Schema and wording check |
| `.github/workflows/verify-integrity.yml` | Runs the check on pull requests |
| `docs/sources-phase1.md` | Phase 1 sourcing notes. The site does not render this file |
| `CHANGELOG.md` | Editor log. The site does not render it |

Home page: lanes are tumor types, years run on the x-axis from 1999, search and topic filters sit above the timeline, and the abbreviation key is rendered from `js/site-meta.js`. The footer has one educational-resource notice and the last literature sweep date. There is no reader-visible changelog.

A marker opens a **Trial snapshot**. **More details** uses the same fields and adds limitations, guidelines (with a locus), sources, and where any numbers were read. `secondaryResults`, when the card has text there, is shown on the snapshot and on More details. A link-only card shows the citation and a link that opens the anticoagulation timeline in a new tab. It does not show design, results, or safety text. Teach → **Learn path** walks the shell. Teach → **Practice questions** runs study mode or a timed exam. Dialogs have a full-screen control. Esc leaves full screen first, then closes the dialog.

Addresses: `#/trial/{id}`, `#/trial/{id}/details`, `#/learn/{step}`, `#/practice`, `#/practice/study/{id}`, `#/practice/exam`.

Keyboard: skip link, `/` focuses search, arrow keys move between markers, Enter opens the snapshot, and Tab stays inside an open dialog.

## Trial schema

`js/data/trials.js` assigns `window.ONCOLOGY_TRIALS`, an array of cards. Every card uses the same fields.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Unique. Used in the address |
| `placeholder` | boolean | `true` while the card is only a layout sample |
| `acronym` | string | Marker label |
| `year` | number | Position on the axis. The axis starts in 1999 |
| `yearLabel` | string | Text shown with the year |
| `topic` | string | A topic `id` from `js/data/topics.js` |
| `status` | string | `published`, `recent`, `pending`, or `link-only` |
| `title` | string | Placeholders use the exact label below |
| `citation` | string | Bibliographic line |
| `pmid` | string | PubMed identifier. `pmid` or `doi` is required |
| `doi` | string | DOI. `pmid` or `doi` is required |
| `design` | string | Study design, described |
| `population` | string | Who was enrolled, described |
| `intervention` | string | What was assigned, described |
| `comparator` | string | Comparison arm, described |
| `primaryResult` | string | Primary endpoint result, described. Omitted on a link-only card |
| `secondaryResults` | string | Optional. Secondary and other non-safety results. An empty string leaves the row off the card. Omitted on a link-only card |
| `safety` | string | Safety findings, described. Omitted on a link-only card |
| `takeaway` | string | Key takeaway |
| `limitations` | string | Limits of the study |
| `guidelines` | array | May be empty. Each entry is a document that cites the trial |
| `sources` | array | At least one source |
| `sourceNotes` | array of strings | Optional. Where each number was read |
| `crossSite` | object | Optional. Link when the same trial is covered on the anticoagulation timeline |
| `reviewedBy` | string | Stays `""` on every card and in `js/site-meta.js` |

Guideline object: `society`, `document`, `year` (number, same year as the trial or later), `locus` (section, table, or page where the trial is cited), and `source` (where that locus was read). `url` is optional.

Source object: `label`, plus at least one of `pmid`, `doi`, or `url`. `note` is optional.

`crossSite`, when present, uses `label` plus `href` or `url`. The address must start with `https://rockyman10.github.io/anticoag-timeline/`. Phase 1 link-only cards use this shape:

```js
{
  site: "anticoag-timeline",
  label: "Full trial card on the anticoagulation timeline",
  id: "caravaggio",
  url: "https://rockyman10.github.io/anticoag-timeline/#/trial/caravaggio"
}
```

When `id` is set, the address includes `#/trial/` plus that id. Omit `crossSite` when the anticoagulation timeline does not cover that trial. On a placeholder card, `label` must include `EXAMPLE, not a real trial`.

A `link-only` card keeps the bibliographic fields (`title`, `citation`, `pmid`, `doi`, `sources`) and `crossSite`. It omits design, population, intervention, comparator, `primaryResult`, `secondaryResults`, safety, takeaway, and limitations, so the card does not carry clinical numbers. The marker opens that short card. The link opens the anticoagulation timeline in a new tab.

A placeholder sets `placeholder: true` and its `title` includes:

```text
EXAMPLE, not a real trial
```

No trial card or practice item in phase 1 is a placeholder.

## Question schema

`js/data/questions.js` assigns `window.ONCOLOGY_QUESTIONS`:

```js
{
  meta: { title: "Practice questions", note: "Shown above the practice modes", examDurationSeconds: 270 },
  items: [ /* items */ ]
}
```

Each item:

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Unique |
| `placeholder` | boolean | `true` for layout samples |
| `topic` | string | Topic `id` |
| `relatedTrialId` | string | A trial `id` |
| `stem` | string | Placeholders include `EXAMPLE, not a real trial` |
| `choices` | array | At least two `{ id, text }` objects. Choice ids are unique inside the item |
| `correctId` | string | Matches one choice `id` |
| `explanation` | string | Why the keyed choice is the key |
| `source` | object | `label` plus `pmid`, `doi`, or `url` |

Study mode shows the explanation after an answer. Exam mode times the sitting from `examDurationSeconds` and holds explanations until submit. The phase 1 sitting is 270 seconds for three items. `meta.note` is the line shown above the practice modes; without it the page falls back to the placeholder notice.

## Content rules

Write in a descriptive voice. State what a study reported. Do not write an order to give, hold, start, stop, or prescribe a medication.

Do not put a disclaimer on a card. The footer carries the one educational-resource notice.

Add a guideline only when that guideline cites the trial, and record the locus (section, table, or page). A guideline list may be empty.

Every number in reader-visible card or question prose needs a source on that card or item (`pmid`, `doi`, or `url`). That includes `secondaryResults`. `year` and `yearLabel` place the marker. Outcome numbers belong in the prose fields and in `sourceNotes`.

Short forms may appear on a card only when `js/site-meta.js` defines them. Write other terms in full.

`reviewedBy` in `js/site-meta.js` stays an empty string.

`node scripts/verify-integrity.js` checks the schema, unique ids, required source fields, an empty `reviewedBy`, and rejects these reader-visible strings: `NOAC`, `Practice-changer`, `Practice-defining`, `Tier`, `Evidence quality`, and `not a dosing order`. It also fails a card dated before 1999, a per-card disclaimer, a popup not named Trial snapshot, and any number in a full card's prose field that is not listed in that field's `sourceNotes` entry. Placeholder entries are reported as info. The check must finish with 0 errors and 0 warnings. `CHANGELOG.md` and `README.md` are not reader-visible and are not scanned.

```bash
node scripts/verify-integrity.js
node --check js/app.js
node --check js/site-meta.js
node --check js/data/topics.js
node --check js/data/trials.js
node --check js/data/questions.js
node --check js/learn-path.js
```

Pull requests run the same check in `.github/workflows/verify-integrity.yml`.

## GitHub Pages

After this work is on `main`, turn Pages on with this setting:

**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)` → Save.**

The site is published at `https://rockyman10.github.io/oncology-timeline/`. `.nojekyll` is in the root so Pages serves the files as they are. No build command is required.

## Theme

The palette is marine blue on pale slate paper (`#1f3f73` on `#e9eef6`, Fraunces and Atkinson Hyperlegible). Lane colors stay inside that blue family. The antiplatelet timeline uses purple, the anticoagulation timeline terracotta, and the critical care timeline teal, so the sites are not mistaken for one another.
