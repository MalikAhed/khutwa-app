# ICT 2023 visual transcription — corrected image placement

This archive contains the visual-only transcription of the supplied 142-page ICT examination and solution PDF. The Markdown preserves 191 multiple-choice questions and 173 written-question flashcards (364 directives total). Text was transcribed from rendered page images; no PDF text extraction or OCR was used.

The corrected image audit uses precise raster crops from the rendered source pages. MCQ icons and choice grids are placed in the MCQ `example`/choice text, figures printed with a question are placed in its `body`, and printed worked diagrams are placed in its `solution`. Questions that are text-only in the source do not receive fabricated images. Each crop's source page and pixel rectangle is recorded under `audit/`.

Use `tools/validate_markdown.py` for the structural check. `evidence/audit.json` records link resolution, byte checks, and the absence of legacy full-page crop references. The original source PDF is retained at `source/ict-2023-source.pdf` for page provenance.
