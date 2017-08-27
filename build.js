const { readFileSync, writeFileSync } = require('fs');
const { toys } = require('./toys');

const template = readFileSync(`${__dirname}/.template.md`, 'utf8');

let content = '';

toys.forEach((l) => {
  content += `\n## ${l.category} \n\n`;
  (l.items || []).forEach((toy) => {
    content += `- [${toy.bought ? 'x' : ' '}] `;
    if (toy.deleted) {
      content += '<del>';
    }
    content += toy.name;
    if (toy.meta) {
      content += ` (${toy.meta})`;
    }
    if (toy.deleted) {
      content += '</del>';
    }
    if (toy.year) {
      content += ` (${toy.year})`;
    }
    content += '\n';
  });
});

writeFileSync(`${__dirname}/README.md`, template.replace('[TOYS]', content), 'utf8');

