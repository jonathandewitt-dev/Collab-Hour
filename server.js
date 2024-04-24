const express = require("express");

const app = express();
const port = 3000;

const routes = [
  {
    path: "/",
    file: "index.html",
  },
  {
    path: "/core-values",
    file: "core-values.html",
  },
  {
    path: "/complete-guide",
    file: "complete-guide.html",
  },
  {
    path: "/collab-teams",
    file: "collab-teams.html",
  },
];

app.use(express.static(__dirname));

for (const route of routes) {
  app.get(route.path, (_, res) => {
    res.sendFile(__dirname + "/" + route.file);
  });
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
