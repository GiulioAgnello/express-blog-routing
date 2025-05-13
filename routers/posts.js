const express = require("express");
const router = express.Router();

// index
router.get(`/`, (req, res) => {
  res.json(`lista dei post`);
});

// show
router.get("/:id", (req, res) => {
  const post = req.params.id;
  res.json(`post n ${post}`);
});

// store
router.post(`/`, (req, res) => {
  res.json(`crea nuovo post`);
});

// update
router.put("/:id", (req, res) => {
  const post = req.params.id;
  res.json(`modifica completa post n ${post}`);
});

// modify
router.patch("/:id", (req, res) => {
  const post = req.params.id;
  res.json(`modifica parziale post n ${post}`);
});

// destroy
router.delete("/:id", (req, res) => {
  const post = req.params.id;
  res.json(`eliminazione del post n ${post}`);
});

// export
module.exports = router;
