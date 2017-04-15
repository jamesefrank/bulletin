module.exports = function(file, valid) {
  valid = valid.concat(['type', 'file', 'order', 'slug', 'index']);
  Object.keys(file).forEach(function(key) {
    if (valid.indexOf(key) === -1) throw new Error(`${key} is unexpected for ${file.type}`);
  });
}
