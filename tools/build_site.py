"""Assemble index.html from src/template.html, src/data.js, src/enrich*.js, src/genload.js (+ src/gen/*.json), src/towns.js and src/map.json."""
import pathlib, json
root = pathlib.Path(__file__).resolve().parent.parent
rd = lambda n: (root / "src" / n).read_text()
gen = {"items": [], "fish": [], "prefpages": []}
for f in sorted((root / "src/gen").glob("*.json")):
    d = json.loads(f.read_text())
    kind = "fish" if f.stem.startswith("fish") else "prefpages" if f.stem.startswith("pref") else "items"
    gen[kind].extend(d)
genload = rd("genload.js").replace("/*__GEN__*/", "(" + json.dumps(gen, ensure_ascii=False, separators=(",", ":")) + ")||")
data = "\n".join([rd("data.js"), rd("enrich.js"), rd("enrich2.js"), genload, rd("towns.js")])
t = rd("template.html")
mapj = rd("map.json")
t = t.replace("/*__MAP__*/", "const MAPDATA=" + mapj + ";").replace("/*__DATA__*/", data)
(root / "index.html").write_text(t)
print("index.html", len(t) // 1024, "KB;", {k: len(v) for k, v in gen.items()})
