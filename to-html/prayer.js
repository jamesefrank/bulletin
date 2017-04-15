module.exports = function(file) {
  var out = [];

  if (file.title) out.push(`<h3>${file.title}</h3>`);
  out.push(`<span class='response'>${file.body}</span>`);

  return out.join('\n');
}

module.exports.valid = ['body', 'title'];
