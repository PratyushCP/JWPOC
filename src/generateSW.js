const jwt = require("jsonwebtoken");
const Time = new Date();

const API_SECRET = "iJ43KzVipJ70fu55xBEVK1tK";

/**
 * Generatea a URL with signature.
 * @param {string} path
 * @param {string} host
 * @returns {string} signed URL
 */
function jwt_signed_url(path, host = "https://cdn.jwplayer.com") {
  const token = jwt.sign(
    {
      exp: Math.ceil((Time.getTime() + 0.36) / 300) * 300,
      resource: `${path}`,
    },
    API_SECRET
  );

  return `${host}${path}?token=${token}`;
}

const media_id = "m6VzwETH";
const policy_id = "NGJ6OXFZ";
const path = `/v2/media/${media_id}/drm/${policy_id}`;
const url = jwt_signed_url(path);

console.log(url);
