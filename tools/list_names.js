// Usage: node tools/list_names.js [cat ...]  -> prints existing entry names (so new work does not duplicate them)
const fs = require('fs'), path = require('path');
const src = ['data.js', 'enrich.js', 'enrich2.js'].map(f => fs.readFileSync(path.join(__dirname, '../src', f), 'utf8')).join('\n');
const run = new Function(src.replace(/\bconst /g, 'var ') + ';return {ITEMS, FISH, CATS};');
const { ITEMS, FISH } = run();
const want = process.argv.slice(2);
const names = ITEMS.filter(i => !want.length || want.includes(i.cat)).map(i => i.cat + ': ' + i.name);
if (!want.length || want.includes('fish')) FISH.forEach(f => names.push('fish: ' + f.en + ' (' + f.ja + ')'));
console.log(names.join('\n'));
