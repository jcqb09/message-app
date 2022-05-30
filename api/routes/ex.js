const express = require("express");
const router = express.Router();

const db = require("./firebase.js");

const {
  getDocs,
  getDoc,
  collection,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
} = require("firebase/firestore");

router.get("/info", async (req, res, next) => {
  const m = [];
  console.log(req.query);
  const docs = await getDocs(collection(db, "messages"));
  docs.forEach((d) => {
    m.push({ id: d.id, data: d.data() });
  });
  res.json({ result: m });
});

router.post("/post", async (req, res, next) => {
  console.log(req.body);
  const post = await addDoc(collection(db, "messages"), {
    user: req.body.user.ref1,
    post: req.body.post.ref2,
  });
  res.send("Received");
});

router.delete("/info/:id", async (req, res, next) => {
  res.sendStatus(200);
  console.log(req.params);

  const del = await deleteDoc(doc(db, "messages", req.params.id));
});

// router.delete("/delete", async (req, res, next) => {
//   console.log(req);
//   const del = await deleteDoc(doc(db, "messages", req.body));
// });

module.exports = router;
