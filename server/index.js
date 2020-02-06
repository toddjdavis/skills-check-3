require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const controller = require('./controller')
const cors = require('cors')
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env
const app = express()

app.use(express.json())
app.use(cors())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60}
}))

app.post('/auth/login', controller.login)
app.post('/auth/register', controller.register)
app.get('/auth/logout', controller.logout)
app.post('/api/post', controller.createPost)
app.get('/api/post/:id', controller.searchPost)
app.get('/api/posts', controller.getAllPost)

massive(CONNECTION_STRING).then( db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(SERVER_PORT, ()=> {console.log(`Server is listening on Port: ${SERVER_PORT}`)})
})