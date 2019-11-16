var PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static("public"));

app.listen(PORT, function (err) {
    if (!err) console.log('Connected at Port:' + PORT);
    else console.log(err);
});