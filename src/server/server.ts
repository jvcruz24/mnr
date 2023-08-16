import express from "express";
import os from "node:os";
import config from "./config";

const server = express();
// MIDDLE WARE
server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    initialContent: "loading... ",
  });
});

// SERVER LOCALHOST
server.listen(config.PORT, config.HOST, () => {
  console.info(
    `express server is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1000 / 1000}`,
  );
});
