const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
// const dotenv = require('dotenv');
// dotenv.config();

const port = process.env.PORT || 8080;
// const environment = process.env.NODE_ENV
// const isProductionEnvironment = environment == 'production'
// const index_path = isProductionEnvironment ? 'build' : 'public';

// console.log(`Environment is ${environment} and index_path is "${index_path}".`);
console.log(`Running on http://localhost:${port}/`)
// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();
// app.use(favicon(__dirname + '/public/favicon.ico'));

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// //простой тест сервера
// app.get('/ping', function (req, res) {
//     return res.send('pong');
// });

app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, 'build', "index.html"));
});

app.listen(port);
