const { readFileSync, writeFileSync } = require('fs');
const { toys } = require('./toys');

const template = readFileSync(`${__dirname}/.template.md`, 'utf8');

let content = '';

toys.forEach((l) => {
  content += `\n## ${l.category} \n\n`;
  (l.items || []).forEach((toy) => {
    content += `- [${toy.bought ? 'x' : ' '}] ${toy.deleted ? '<del>' : ''}${toy.name}${toy.deleted ? '</del>' : ''}`;
    if (toy.meta) {
      content += ` (${toy.meta})`;
    }
    content += ` (${toy.year})\n`;
  });
});

writeFileSync(`${__dirname}/README.md`, template + content, 'utf8');

