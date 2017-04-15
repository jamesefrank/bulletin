var callAndResponseBody = require('./call-and-response-body');

module.exports = function(file) {
  var out = [];

  out.push(`<h2>${file.title}</h2>`);
  if (file.verse) out.push(`<h3> ${file.verse} </h3>`);

  if (file.body) out.push(`<p class='note'>Before and after the lesson, we say:</p>`);

  if (file.body) out.push(callAndResponseBody(file.body));

  if (file.response) out.push(`<span class="presenter">${file.response}</span>`);

  return out.join('\n');
}

module.exports.valid = ['title', 'verse', 'response', 'body'];
