// Usage: node tools/validate_gen.js <items|fish|prefpage> <file.json>
const fs = require('fs');
const [kind, file] = process.argv.slice(2);
const CATS = ['fish','seafood','dish','sushi','shoyu','miso','dashi','salt','veg','fruit','rice','tea','soy','ramen','noodle','meat','seaweed','pickles','sweets','sake','shochu','whisky','producer','glossary'];
const errs = [];
let data; try { data = JSON.parse(fs.readFileSync(file, 'utf8')); } catch (e) { console.log('INVALID JSON: ' + e.message); process.exit(1); }
const url = u => typeof u === 'string' && /^https?:\/\/[^ ]+\.[^ ]+/.test(u);
const checkSrc = (src, where) => { if (!Array.isArray(src) || !src.length) return errs.push(where + ': src needs at least one [label,url]'); src.forEach(s => { if (!Array.isArray(s) || s.length !== 2 || !s[0] || !url(s[1])) errs.push(where + ': bad src ' + JSON.stringify(s)); }); };
const prefsOk = (p, where, allowEmpty) => { if (!Array.isArray(p) || (!allowEmpty && !p.length) || p.some(x => !Number.isInteger(x) || x < 1 || x > 47)) errs.push(where + ': prefs must be integers 1-47' + (allowEmpty ? '' : ' (non-empty)')); };
if (kind === 'items') {
  if (!Array.isArray(data)) errs.push('root must be an array');
  const seen = new Set();
  (data || []).forEach((it, i) => {
    const w = '#' + i + ' ' + (it && it.name);
    if (!CATS.includes(it.cat)) errs.push(w + ': bad cat ' + it.cat);
    for (const k of ['name', 'ja', 'text', 'flavor', 'use', 'craft']) if (typeof it[k] !== 'string' || !it[k].trim()) errs.push(w + ': missing ' + k);
    if (it.text && (it.text.length < 70 || it.text.length > 1100)) errs.push(w + ': text length ' + it.text.length + ' (70-1100)');
    prefsOk(it.prefs, w, it.cat === 'glossary');
    checkSrc(it.src, w);
    if (seen.has(it.name)) errs.push(w + ': duplicate name in file'); seen.add(it.name);
  });
} else if (kind === 'fish') {
  if (!Array.isArray(data)) errs.push('root must be an array');
  (data || []).forEach((f, i) => {
    const w = '#' + i + ' ' + (f && f.en);
    for (const k of ['id', 'en', 'ja', 'latin', 'alt', 'intro', 'flavor', 'use', 'craft']) if (typeof f[k] !== 'string' || !f[k].trim()) errs.push(w + ': missing ' + k);
    if (!Array.isArray(f.months) || f.months.length !== 12 || f.months.some(m => ![0, 1, 2].includes(m))) errs.push(w + ': months must be 12 numbers 0/1/2');
    if (!Array.isArray(f.seasons)) errs.push(w + ': seasons array');
    (f.seasons || []).forEach(s => { if (!Array.isArray(s.m) || s.m.length !== 2 || !s.n || !s.j || !s.t) errs.push(w + ': bad season ' + JSON.stringify(s)); });
    if (!Array.isArray(f.systems) || !f.systems.length) errs.push(w + ': systems needed');
    const used = new Set();
    (f.systems || []).forEach(s => { prefsOk(s.prefs, w + ' system ' + s.label); (s.prefs || []).forEach(p => { if (used.has(p)) errs.push(w + ': pref ' + p + ' in two systems'); used.add(p); }); if (!s.label || !Array.isArray(s.names) || !s.names.length) errs.push(w + ': system needs label and names'); (s.names || []).forEach(n => { if (!n.n || !n.j) errs.push(w + ': name needs n and j'); if (typeof n.s !== 'string' || typeof n.t !== 'string') errs.push(w + ': name needs s and t strings'); }); });
    checkSrc(f.src, w);
  });
} else if (kind === 'prefpage') {
  if (!Array.isArray(data)) errs.push('root must be an array');
  (data || []).forEach((p, i) => {
    const w = '#' + i + ' pref ' + (p && p.pref);
    if (!Number.isInteger(p.pref) || p.pref < 1 || p.pref > 47) errs.push(w + ': bad pref');
    for (const k of ['history', 'character', 'notes']) if (typeof p[k] !== 'string' || p[k].length < 120) errs.push(w + ': ' + k + ' too short (min 120 chars)');
    if (!Array.isArray(p.staples) || p.staples.length < 6) errs.push(w + ': staples needs 6+');
    (p.staples || []).forEach(s => { if (!s.name || !s.ja || !s.note) errs.push(w + ': staple needs name, ja, note'); });
    if (!Array.isArray(p.calendar) || p.calendar.length !== 4) errs.push(w + ': calendar needs 4 seasons (spring, summer, autumn, winter)');
    (p.calendar || []).forEach(s => { if (!s.season || !s.text || s.text.length < 60) errs.push(w + ': calendar entry needs season and text (60+ chars)'); });
    if (!Array.isArray(p.markets) || p.markets.length < 2) errs.push(w + ': markets needs 2+');
    (p.markets || []).forEach(m => { if (!m.name || !m.ja || !m.note) errs.push(w + ': market needs name, ja, note'); });
    checkSrc(p.src, w);
  });
} else errs.push('unknown kind');
if (errs.length) { console.log(errs.length + ' PROBLEMS:\n' + errs.slice(0, 40).join('\n')); process.exit(1); }
console.log('OK ' + (Array.isArray(data) ? data.length : 0) + ' records');
