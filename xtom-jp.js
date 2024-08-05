const ustclugv1 = require("./ustclug-v1");

module.exports = async function (siteUrl) {
  const site = await (
    await fetch(siteUrl)
  ).json();
  const data = await ustclugv1(
    "https://cors.quickso.cn/?/https://mirrors.xtom.jp/",
    "https://mirrors.xtom.jp/api/v1/metas"
  );

  return {
    site,
    info: data.info,
    mirrors: data.mirrors,
  };
};
