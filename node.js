const init = () => {
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  global.DOMParser = new JSDOM().window.DOMParser;

  Timeout = require("await-timeout");
  const timeout = 15000;
  global.Timeout = Timeout;
  global.timeout = timeout;

  fetch_extra = require("node-fetch-extra");
  async function fetchV6First (u, opt) {
    const promise = fetch_extra(u, {family: 6, ...opt});
    return await Timeout.wrap(promise, timeout/10, 'Timeout').catch(async (e) => {
      const promise = fetch_extra(u, opt);
      return await Timeout.wrap(promise, timeout/3, 'Timeout').catch(() => null);
    });
  }
  global.fetch = fetchV6First;
};
const load = async (source) => {
  if (typeof(source) == "string") {
    const resp = await fetch(source);
    if (resp === null)
      return null;
    return await resp.json().catch(_ => null);
  } else {
    return await Timeout.wrap(source(), timeout, 'Timeout').catch(() => null);
  }
}

module.exports = { init, load };
