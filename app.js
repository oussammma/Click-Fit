// Imports
const express = require('express');
const upload = require('express-fileupload')
const session = require('express-session')
const flush = require('connect-flash')
const app = express();
const port = process.env.PORT || 3000;

app.use(upload())

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.use(session({
    secret: 'secret',
    cookie: {maxAge : 60000},
    resave: false,
    saveUninitialized: false
}))
app.use(flush())

//Set views
app.set('views', './views')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {message : flush('message')})
})

app.post('/', (req, res) => {
    if(req.files) {
        var file = req.files.file
        var fileName = file.name
        file.mv('./upload/' + fileName, function(err) {
            if(err) {
                res.send(err)
            }else {
                flush('message', 'saved seccessfully')
                res.redirect('/')
            }
        })
    }
})

//Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))