"""Assemble index.html from src/template.html, src/data.js and src/map.json."""
import pathlib
root = pathlib.Path(__file__).resolve().parent.parent
t = (root / "src/template.html").read_text()
data = (root / "src/data.js").read_text() + "\n" + (root / "src/enrich.js").read_text()
mapj = (root / "src/map.json").read_text()
t = t.replace("/*__MAP__*/", "const MAPDATA=" + mapj + ";").replace("/*__DATA__*/", data)
(root / "index.html").write_text(t)
print("index.html", len(t) // 1024, "KB")
