const express = require("express");
const pug = require("pug");
const path = require("path");

const app = express();

app.use(express.static('public'))



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/routes/index.html'));
})

const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));