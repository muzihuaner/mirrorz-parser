const config = require('./config.json')

exports.cname = async function() {
  const cname = await (await fetch(config.url + "/static/json/cname.json")).json();
  return (name) => { return (name in cname) ? cname[name] : name; };
};
