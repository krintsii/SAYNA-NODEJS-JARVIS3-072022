const express = require('express')
const sequelize = require('./src/db/sequelize')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000;
//pour l'afficahge de les different routes
app.set('view engine', 'ejs')
app.set('views', 'public' )
app

    .use(express.static('public'))
    .use(bodyParser.json())



//le base de données
sequelize.initDb()


//pour le page d'accueill
app.get('/', (req, res) => {
    res.status(200)
    res.render('index')
})


//les routes
require('./src/Routes/login')(app)
require('./src/Routes/register')(app)
require('./src/Routes/invitation')(app)






app.listen(PORT, console.log(`http://localhost:${PORT}`))


