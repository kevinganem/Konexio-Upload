//------------- DEPENDENCIES -------------\\

const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const upload = multer({ dest: "../public/uploads" });
const app = express();

//------------- MIDDLEWARE -------------\\

app.use(express.json());

app.use((_req, _res, next) => {
  console.log("Request received.");
  next();
});

app.use(express.static("public"));

//------------- POST -------------\\

app.post("/upload", upload.single("image"), (req, res) => {
  fs.renameSync(
    req.file.path,
    path.join(req.file.destination, req.file.originalname)
  );
  res.send("Image received");
});

app.get("/", (_req, res) => {
  res.send("use /user with the method GET to see or POST to add");
});

app.get("*", (_req, res) => {
  res.status(404).send("Error 404");
});

//------------- LOCALHOST -------------\\

app.listen(8000, () => {
  console.log("Listening...");
});
