//TODO: Make this use React Router not Express
const express = require("express");
const path = require("path");
const colors = require("colors");

const port = process.env.PORT || 8000;
const app = express();

colors.setTheme({
  connect: ["yellow"],
  user: ["green"],
  action: ["cyan"],
  spam: ["grey"],
  error: ["red", "underline", "bold"],
  info: ["magenta"],
  warn: ['red']
})

app.use("/assets", express.static(path.resolve("./static")));
app.use("/assets", express.static(path.resolve("./dist")));

app.get("/", (req, resp) => {
  resp.sendFile(path.resolve("./dist/index.html"));
})
app.get("/dash", (req, resp) => {
  resp.sendFile(path.resolve("./dist/index.html"));
})

app.get("*", (req, resp) => {
  console.log(`404 on ${req.path}`.warn);
  let req_path = req.path.split("/");
  if (req_path.indexOf("js") === -1 && req_path.indexOf("assets") === -1 && req_path.indexOf("stylesheets") === -1) {
    resp.status(404).redirect("/");
  } else {
    resp.status(404).end();
  }
})

app.listen(port, () => {
  console.log(`Frontend hosted on ${port}`.action);
})
