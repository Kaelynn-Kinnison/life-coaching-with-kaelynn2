const https = require("https");

const host = "www.lifecoachingwithkaelynn.com";
const key = "f9ee6b2f02d04d99b504798a5e655ca9";
const endpoint = "api.indexnow.org";

const defaultUrls = [
  `https://${host}/`,
  `https://${host}/about`,
  `https://${host}/life-coaching`,
  `https://${host}/services`,
  `https://${host}/pricing`,
  `https://${host}/coaching-approach`,
  `https://${host}/core-belief-coaching`,
  `https://${host}/heal-framework`,
  `https://${host}/testimonials`,
  `https://${host}/faq`,
  `https://${host}/contact`,
  `https://${host}/blog`,
];

const inputUrls = process.argv.slice(2);
const urlList = inputUrls.length
  ? inputUrls.map((url) => (url.startsWith("http") ? url : `https://${host}${url.startsWith("/") ? "" : "/"}${url}`))
  : defaultUrls;

const payload = JSON.stringify({
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList,
});

const request = https.request(
  {
    hostname: endpoint,
    path: "/indexnow",
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Length": Buffer.byteLength(payload),
    },
  },
  (response) => {
    let body = "";

    response.on("data", (chunk) => {
      body += chunk;
    });

    response.on("end", () => {
      console.log(`IndexNow response: ${response.statusCode}`);
      if (body) {
        console.log(body);
      }

      if (![200, 202].includes(response.statusCode)) {
        process.exitCode = 1;
      }
    });
  },
);

request.on("error", (error) => {
  console.error(error.message);
  process.exitCode = 1;
});

request.write(payload);
request.end();
