
module.exports = function(file) {
  var out = [];

  out.push(`<h2>${file.title}</h2>`);

  if (file.body) out.push(`<p class="note">${file.body}</p>`);

  return out.join('\n');
}

module.exports.valid = ['title', 'body'];
