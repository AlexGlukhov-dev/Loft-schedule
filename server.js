const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');

app.use(express.static("build"));
app.get('*', (req, res) => {
  res.sendFile(`index.html`, { root: "build" });
});
app.post('*', (req, res) => {
  res.sendFile(`index.html`, { root: "build" });
});
app.listen(80, () => {
  console.log(`Example app listening at http://localhost:80`)
})
const httpsOptions = {
  key: fs.readFileSync("adminchik-loftfitnesss.ru-privateKey.key"), // путь к ключу
  cert: fs.readFileSync("adminchik-loftfitnesss.ru.crt") // путь к сертификату
}
https.createServer(httpsOptions, app).listen(443);
