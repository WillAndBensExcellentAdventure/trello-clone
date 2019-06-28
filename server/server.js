const express = require('express');


const app = express();

app.get('/', (req, res) => {
  res.send("doxssd");
});

const port = 8080;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
