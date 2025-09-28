const express = require("express");
const path = require("path");
const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const app = express();
const port = 3000;

const publicDir = path.join(__dirname, 'public');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDir);

app.use(connectLiveReload());
app.use((_, res, next) => {
  const originalSend = res.send;

  res.send = function (body) {
    if (typeof body === "string" && body.includes("</body>")) {
      const liveReloadScript =
        '<script src="http://localhost:35729/livereload.js"></script>';
      body = body.replace("</body>", `${liveReloadScript}</body>`);
    }
    return originalSend.call(this, body);
  };

  next();
});

app.use(express.static(publicDir, { extensions: ['html'] }));

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
