var fs = require('fs');
var path = require('path');

var year = process.argv[2];

var checkValid = require('./to-html/check-valid');
var readAndParse = require('./to-html/read-and-parse');

var sectionsDir = path.join(__dirname, year, 'sections');

var files = fs.readdirSync(sectionsDir).map(f => path.join(sectionsDir, f)).map(readAndParse);

var index = files.filter(f => f.index).map(toIndex).join('\n');

var html = files.map(toHtml).join('\n<br/>\n');

var output = fs.readFileSync(`./${year}/shell.html`).toString();

output = output.replace('INSERT_TOC', index);
output = output.replace('INSERT_MAIN_CONTENT', html);

fs.writeFileSync('./index.html', output);

function toIndex(file) {
  return `<a href="#${file.slug}">${file.title}</a><br/>`
};

function toHtml(file) {
  console.log(file.type, file.file);
  var converter = require('./to-html/'+file.type);
  checkValid(file, converter.valid || []);
  return `<div id="${file.slug}"></div>\n${converter(file)}`;
}


