module.exports = function(file) {
  var out = [];

  if (file.title) out.push(`<h3>${file.title}</h3>`);
  if (file.subtitle) out.push(`<p class='note'>${file.subtitle}</p>`);

  if (file.body) {
    var blocks = file.body.split('\n\n');
    blocks.forEach(function(block) {
      var lines = block.split('\n');
      out.push('<p>');
      out.push(`<b>${lines[0]}</b><br />`);
      out.push(`${lines.slice(1)}`);
      out.push('</p>');
    });
  }

  return out.join('\n');
}

module.exports.valid = ['title', 'subtitle', 'body'];
