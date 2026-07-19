# Website content library

The original manuscript folder is not modified. This folder contains copies for proofreading and scheduling.

1. Run `tools/build-content-library.ps1` to export Word text files and `content-manifest.json`.
2. Proofread every item, confirm its title/category, then change `status` from `needs_review` to `approved`.
3. Add `scheduled_date` and `image_prompt` only after approval.
4. The future publisher should only select approved, scheduled entries; it creates the ink-painting image, publishes the page, and records the outcome.

`source_rank` identifies a source preference. `image_prompt` should describe the scene only, never ask the image model to typeset poem lines.
