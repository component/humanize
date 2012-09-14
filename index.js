
module.exports = function(str){
  str = removeExtension(str);
  str = str[0].toUpperCase() + str.slice(1);
  return str.replace(/[\W_]+/g, ' ');
};

function removeExtension(str) {
  var i = str.lastIndexOf('.');
  if (-1 == i) return str;
  return str.slice(0, i);
}