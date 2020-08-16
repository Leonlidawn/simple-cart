const express = require('express')
const path = require('path');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const PORT = args.port || 80;


let app = express()
app.use(express.static(path.join(__dirname, '..', 'build')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('frontend server listening to port:' + PORT);
})