# Changelog

Newest first. Record site changes here. The site does not render this file.

## 2026-11-24 — Phase 1 solid-tumor cards (draft, pending ONC Lit Inspector)

- New sister site on the antiplatelet-timeline engine. Title "Oncology trials". Lanes are tumor types: breast, lung, colorectal, prostate, and a cancer-associated thrombosis link lane.
- 48 full cards from the phase 1 scout (12 breast, 12 lung, 12 colorectal, and 12 prostate), including KEYNOTE-522, PACIFIC, IMpower133, CASPIAN, ADRIATIC, and KEYNOTE-177 in their tumor lanes. Every number was read from the PubMed abstract of the cited PMID. `sourceNotes` records the abstract sentence for each field. `guidelines` stays empty. `reviewedBy` stays empty.
- 10 link-only stubs for cancer-associated thrombosis trials (CLOT, CATCH, Hokusai VTE Cancer, SELECT-D, AVERT, CASSINI, ADAM-VTE, Caravaggio, CANVAS, API-CAT). Each opens its card on the anticoagulation timeline and carries no result text.
- Three unofficial BCOP-style example questions (KATHERINE, IPASS, JMDB). They are not from the BCOP examination. `questions.meta.note` sets the line shown above the practice modes.
- `scripts/verify-integrity.js` also fails a card dated before 1999, a per-card disclaimer, a popup not named Trial snapshot, and any number in a full card's prose that is missing from that field's `sourceNotes` entry.
- Theme is marine blue on pale slate paper, so the site is not mistaken for the purple, terracotta, or teal sister sites.
- Sourcing notes are in `docs/sources-phase1.md`.
