require('dotenv').config();
const express = require('express')
const path = require('path');

const PORT = process.env.PORT;

let app = express()
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('frontend server listening to port:' + PORT);
})