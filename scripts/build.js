// Inlines data/upsell.json into template.html -> upsell-leaderboard.html (standalone, opens from file://)
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const data = JSON.parse(fs.readFileSync(path.join(root, 'data', 'upsell.json'), 'utf8'));
const tpl = fs.readFileSync(path.join(root, 'template.html'), 'utf8');
if (!tpl.includes('/*__DATA__*/null')) throw new Error('placeholder missing in template.html');
const out = tpl.replace('/*__DATA__*/null', () => JSON.stringify(data));
fs.writeFileSync(path.join(root, 'upsell-leaderboard.html'), out);
console.log('wrote upsell-leaderboard.html (' + out.length + ' bytes)');
