var fs = require('fs');

module.exports = readAndParse;

function readAndParse(file, idx) {
  var content = fs.readFileSync(file).toString();
  var startJSON = content.indexOf('```');
  var endJSON = content.indexOf('```', startJSON+1);
  try {
    var json = JSON.parse(content.slice(startJSON+4, endJSON).trim());
  }
  catch(err) {
    console.log(file);
    throw err;
  }
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

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
