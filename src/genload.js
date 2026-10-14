/* Merges the generated JSON entries (src/gen/*.json) into ITEMS, FISH and PREFPAGES. */
const GEN = /*__GEN__*/{ items: [], fish: [], prefpages: [] };
const PREFPAGES = {};
(function () {
  const have = new Set(ITEMS.map(i => i.name.toLowerCase()));
  for (const it of GEN.items) {
    const key = it.name.toLowerCase(); if (have.has(key)) continue; have.add(key);
    ITEMS.push({ id: "g" + ITEMS.length, cat: it.cat, name: it.name, ja: it.ja, prefs: it.prefs || [], text: it.text, flavor: it.flavor, use: it.use, craft: it.craft, src: it.src });
  }
  const fid = new Set(FISH.map(f => f.id));
  for (const f of GEN.fish) { if (fid.has(f.id)) continue; fid.add(f.id); FISH.push(f); }
  for (const p of GEN.prefpages) PREFPAGES[p.pref] = p;
  const add = (id, label, ja, intro) => { if (!CATS.find(c => c.id === id)) CATS.push({ id, label, ja }); if (!CAT_INTRO[id]) CAT_INTRO[id] = intro; };
  add("fruit", "Fruit", "果物", "Japanese fruit is sold by cultivar, grade and orchard: the name on the box tells you the variety and the price tells you the selection.");
  add("producer", "Makers & houses", "蔵・老舗", "Named producers: breweries, shoyu and miso houses, distilleries, katsuobushi and kombu makers, confectioners and noodle shops, with founding years and signature techniques.");
  add("glossary", "Glossary", "用語", "The working vocabulary of the Japanese kitchen, brewery and market: terms for koji and brewing, knife work, grades and labels, seasons and etiquette.");
  const ORDER = ["fish", "seafood", "dish", "sushi", "shoyu", "miso", "dashi", "salt", "veg", "fruit", "rice", "tea", "soy", "ramen", "noodle", "meat", "seaweed", "pickles", "sweets", "sake", "shochu", "whisky", "producer", "glossary"];
  CATS.sort((a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id));
})();
