const express = require("express");
const router = express.Router();
port = 3000;

// index
router.get(`/posts/`, (req, res) => {
  res.send(`lista dei post`);
});

// show
router.get(`/post/:id`, (req, res) => {
  const post = req.params.id;
  res.sed(`post n ${post}`);
});

// export
module.exports = router;
