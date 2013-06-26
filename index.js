
module.exports = function(str){
  var s = removeExtension(str);
  if ('' == s) return str;
  s = s[0].toUpperCase() + s.slice(1);
  return s.replace(/[\W_]+/g, ' ');
};

function removeExtension(str) {
  var i = str.lastIndexOf('.');
  if (-1 == i) return str;
  return str.slice(0, i);
}
