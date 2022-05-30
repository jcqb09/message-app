const express = require("express");
const router = express.Router();

const db = require("./firebase.js");

const { getDocs, getDoc, collection } = require("firebase/firestore");

router.get("/info", async (req, res, next) => {
  const m = [];
  console.log(req.query);
  const docs = await getDocs(collection(db, "messages"));
  docs.forEach((doc) => {
    m.push(doc.data());
  });
  res.json({ result: m });
});

router.post("/post", (req, res, next) => {
  console.log(req.body);
  res.send("Received");
});

module.exports = router;
