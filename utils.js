const config = require('./config.json');
var cname;

exports.cname = async function() {
  // Make JavaScript transpiler happy
  // Otherwise it would compile incorrect code and thus making "ReferenceError: data is not defined" error.
  let data;

  if (!cname) {
    data = await fetch(config.url + "/static/json/cname.json");
    cname = await data.json();
  }
  return (name) => { return (name in cname) ? cname[name] : name; };
};
