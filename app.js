require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT ;

//Registrando Partials
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Servir contenido estatico
app.use(express.static('public'));


//Rutas

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Jhon Rivera',
        titulo: 'Curso de Node'
    });
   
});

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Jhon Rivera',
        titulo: 'Curso de Node'
    });
   
});

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Jhon Rivera',
        titulo: 'Curso de Node'
    });
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})