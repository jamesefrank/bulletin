var fs = require('fs');
var path = require('path');

var checkValid = require('./to-html/check-valid');

var sectionsDir = path.join(__dirname, 'sections');

var files = fs.readdirSync('./sections').map(f => path.join(sectionsDir, f)).map(readAndParse);

var index = files.filter(f => f.index).map(toIndex).join('\n');

var html = files.map(toHtml).join('\n<br/>\n');

var output = fs.readFileSync('./shell.html').toString();

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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function readAndParse(file, idx) {
  var content = fs.readFileSync(file).toString();
  var startJSON = content.indexOf('```');
  var endJSON = content.indexOf('```', startJSON+1);
  var json = JSON.parse(content.slice(startJSON+4, endJSON).trim());
  var body = content.slice(endJSON+4).trim();
  if (json.title) json.title = toTitleCase(json.title);
  json.file = file;
  if (body.length > 0) json.body = body;
  json.order = idx;

  json.slug = slugger(json.file);
  return json;
}

function slugger(path) {
  var int = 0;
  for (var i=0; i<path.length; i++) {
    int += path.charCodeAt(i);
  }
  return int.toString(16);
}
