const app = require('./config/server');

const routeHome = require('./app/routes/home')(app)

const routeNoticias = require('./app/routes/noticias')(app)

const routeFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticias')(app)

app.listen(3000, function(){
    console.log("info",'Server is running at port : ' + 3000);
});
