const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.all('/', homePageHandler)
function homePageHandler(request, response) {
  response.sendFile(path.join(__dirname, './views/home.html'))
}

app.all('/about', aboutPageHandler)
function aboutPageHandler(request, response) {
  response.sendFile(path.join(__dirname, './views/about.html'))
}

app.all('/works', worksPageHandler)
function worksPageHandler(request, response) {
  response.sendFile(path.join(__dirname, './views/works.html'))
}

app.listen(4000)