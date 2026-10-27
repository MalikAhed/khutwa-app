# Math fonts

Local, losslessly compressed WOFF2 copies; glyphs and OpenType layout tables are retained.

- `xits-math.woff2`: XITS Math Regular 1.302, from https://github.com/aliftype/xits/tree/v1.302. Provides mathematical glyphs, the MATH table and RTL mirror forms. License: `XITS-OFL.txt`.
- `amiri-regular.woff2`: Amiri Regular 1.003, from https://github.com/aliftype/amiri/tree/1.003. Provides Arabic letters, joined function names and numerals. License: `Amiri-OFL.txt`.

Both fonts use the SIL Open Font License 1.1. The CSS family aliases do not rename or modify the fonts' internal names.

## iOS-compatible RTL integrals

`integral-rtl.woff2` is a 1.9 KB derivative of XITS Math, renamed internally to `KhutwaIntegralRTL` under the same `XITS-OFL.txt` license. Only U+222B–U+222E are included. Their MATH variant lists include the base glyph before the display glyph for Firefox compatibility. Their character mappings point directly at XITS's existing mirrored glyphs; their outlines and MATH display variants are unchanged. The renderer uses this font only for RTL integrals, inside an LTR operator wrapper, so older Safari does not have to mirror a large operator. Latin integrals keep the original font.

Regenerate only when changing the source font (Python with `fonttools[woff]`; not a build dependency):

```python
from copy import copy
from fontTools.ttLib import TTFont
from fontTools.subset import Options, Subsetter
font = TTFont('assets/fonts/math/xits-math.woff2', recalcTimestamp=False)
for table in font['cmap'].tables:
    if table.isUnicode():
        for code in range(0x222B, 0x222F):
            if code in table.cmap:
                table.cmap[code] = f'uni{code:04X}.rtlm'
variants = font['MATH'].table.MathVariants
constructions = dict(zip(variants.VertGlyphCoverage.glyphs, variants.VertGlyphConstruction))
for code in range(0x222B, 0x222F):
    name = f'uni{code:04X}'
    mirrored = constructions[name + '.rtlm']
    base = copy(constructions[name].MathGlyphVariantRecord[0])
    base.VariantGlyph = name + '.rtlm'
    mirrored.MathGlyphVariantRecord.insert(0, base)
    mirrored.VariantCount = len(mirrored.MathGlyphVariantRecord)
options = Options()
options.layout_features = []
subset = Subsetter(options=options)
subset.populate(unicodes=range(0x222B, 0x222F))
subset.subset(font)
for record in font['name'].names:
    if record.nameID in [1, 2, 3, 4, 6, 16, 17]:
        value = 'Regular' if record.nameID in [2, 17] else 'KhutwaIntegralRTL'
        record.string = value.encode(record.getEncoding())
font.flavor = 'woff2'
font.save('assets/fonts/math/integral-rtl.woff2')
```
