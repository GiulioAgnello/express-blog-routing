// import
const { posts } = require("./db");

// install express e port
const express = require("express");
const app = express();
const port = 3000;
const url = `http://localhost:${port}/`;

app.use("/");

// cartella public disponibile
app.use(express.static("public"));

// ascolto
app.listen(port, () => {
  console.log(`server in ascolto su ${url}`);
});
