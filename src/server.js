const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configuring nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configuring to accept request body
server.use(express.urlencoded({ extended: true }));
// configuring static files (css, scripts, images)
server.use(express.static("public"))

// configuring routes
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)
server.post("/save-classes", saveClasses)

server.listen(3333)