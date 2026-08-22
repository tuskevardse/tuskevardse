# Codex master prompt — teljes tartalmi refaktorálás

Perform the complete autonomous content and information-architecture refactoring of the Tüskevár DSE public website according to AGENTS.md and every document under docs/content/.

Audit the complete public-facing site, not only the homepage. Treat existing copy as source material, not protected wording. Preserve verified facts, URLs and stable `data-editor-*` identifiers. Do not invent facts; report unresolved factual gaps as `NEEDS_VERIFICATION`.

Improve natural Hungarian, clarity, specificity, rhetorical variety, brand distinctiveness and visitor-oriented information architecture. Merge, delete or reorder redundant sections where justified. Prefer concrete human situations and verbs over abstract marketing language. Review navigation, hierarchy, headings, CTAs, metadata and cross-page consistency.

Run `npm run lint`, `npm run build`, and `npm run content:audit`. Inspect the rendered site, not only source files. Iterate after the first successful build until technical checks pass and the quality gates in `docs/content/CONTENT_EVAL.md` are satisfied or remaining exceptions are explicitly documented.

At the end report structural changes, major content changes, deleted/merged sections, editor-identifier changes if any, validation results, quality scores with short justification, and remaining `NEEDS_VERIFICATION` items. Do not push unless explicitly requested.
