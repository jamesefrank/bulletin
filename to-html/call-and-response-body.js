module.exports = function(body) {
  var out = [];
  if (body) {


    var blocks = body.split('\n\n');
    blocks.forEach(function(block, i) {
      if (i%2==0) out.push('<p class="prayer">');
      var lines = block.split('\n');
      if (i%2==1) out.push(`<span class="response">`);
      lines.forEach(function(line) {
        if (i%2===0) {
          out.push(line.trim());
        }
        else {
          out.push(`${line.trim()}`);
        }
      });
      if (i%2==1) out.push('</span></p>');
    });


  }

  return out.join('\n');
}
