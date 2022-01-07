const slugify = require('slugify');

exports.stringToSlug = (str) => slugify(str);

exports.upperFirstLetterWord = (str) => {
  str = str.split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str;
}