const express = require("express");
const router = express.Router();

// index
router.get(`/`, (req, res) => {
  res.send(`lista dei post`);
});

// show
router.get(`/:id`, (req, res) => {
  const post = req.params.id;
  res.send(`post n ${post}`);
});

// export
module.exports = router;
