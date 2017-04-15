var callAndResponseBody = require('./call-and-response-body');

module.exports = function(file) {
  var out = [];

  if (file.title) out.push(`<h3>${file.title}</h3>`);
  if (file.subtitle) out.push(`<p class='note'>${file.subtitle}</p>`);

  if (file.body) out.push(callAndResponseBody(file.body));

  return out.join('\n');
}

module.exports.valid = ['title', 'subtitle', 'body'];
