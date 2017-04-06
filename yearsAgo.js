module.exports = function(year) {
  var thisYear = new Date();
  var yearAgo = thisYear.getFullYear() - year;

  return yearAgo + " years ago.";
}

