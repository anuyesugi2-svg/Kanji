# Regional Japan

An interactive, zoomable map of Japan's regional food and drink: fish names that change with size, season and place (shusse-uo), shoyu, miso, kombu and dashi, ramen, noodles, meat, seaweed, pickles, sweets, sake, shochu, whisky, beer and wine, with a month slider for seasonal fish.

Open `index.html` in a browser. It is a single static file with no dependencies.

## Editing
- `src/data.js`: base content (regions, prefectures, items, fish)
- `src/enrich.js`, `src/enrich2.js`: corrections, craft-level detail and Japanese source links; items with a `src` list show as "sourced". `enrich2.js` also holds the dishes, sushi, vegetables, rice, tea and tofu layers
- `src/template.html`: layout, styling and map logic
- `src/map.json`: simplified prefecture outlines (Okinawa inset)
- `tools/build_map.py`: regenerates `src/map.json` from the dataofjapan/land GeoJSON
- `python3 tools/build_site.py`: rebuilds `index.html`

Regional names are traditions, not strict borders; entries are an editorial guide and worth double-checking before publishing.
