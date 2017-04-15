

module.exports = function(file) {
  var out = [];

  var singer = '';
  if (file.singer) singer = `<span class="presenter">${file.singer}</span>`;


  if (file.title) out.push(`<h3>${file.title}</h3>`);
  if (file.subtitle) out.push(`<p class="note">${file.subtitle} ${singer}</h3>`);
  if (file.body) {
    out.push(`<div class="lyrics">`);
    var blocks = file.body.split('\n\n');

    blocks.forEach(function(block) {
      var lines = block.split('\n');
      var italic = false;
      lines = lines.filter(function(l) {
        if (l==='```') {
          italic = true;
          return false;
        }
        return true;
      });
      out.push(`<p ${italic ? 'class="italic"' : ''}>`);

       lines.forEach(function(line) {
         out.push(`<div class="lyric">${line}</div>`);
       })
      out.push(`</p>`);
    })

    out.push(`</div>`);
  }

  return out.join('\n');
}

module.exports.valid = ['title', 'subtitle', 'body', 'singer'];
