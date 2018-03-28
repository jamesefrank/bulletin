var fs = require('fs');
var path = require('path');
var readAndParse = require('./to-html/read-and-parse');
var exec = require('child_process').execSync;

var sectionsDir = path.join(__dirname, 'sections');
var yearDir = path.join(__dirname, '2018/sections');

var files = fs.readdirSync('./sections').map(f => path.join(sectionsDir, f)).map(readAndParse);

files.forEach(f => {
  var add = '';
  if (f.order < 10) add = '00';
  else if (f.order < 100) add = '0';
  var loc = path.join(yearDir, `${add}${f.order}-${f.type}.md`);
  var cmd = `mv ${f.file} ${loc}`;
  exec(cmd);
});
