const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

// temp
const proffys = [
    {
        name: "Willian Gois",
        avatar: "https://avatars1.githubusercontent.com/u/15698040?s=460&u=a2abfcde767f30a17d5a176bbb8bb2d2ea3fe9b9&v=4",
        subject: "Ciências",
        bio: "Aprendendo!",
        cost: "100,00",
        whatsapp: "54 90000 0000"
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

// funcionalidades
function getSubject(subjectId) {
    return subjects[subjectId]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    
    return res.render("study.html", { proffys, subjects, weekdays, filters })
}

function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0

    if (isNotEmpty) {
        data.subject = getSubject(data.subject)

        proffys.push(data)    

        return res.redirect("/study")
    }
    
    return res.render("give-classes.html", { subjects, weekdays })
}

// configuring nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// configuring static files (css, scripts, images)
server.use(express.json());
server.use(express.static("public"))

// configuring routes
server.get("/", pageLanding)
server.get("/study", pageStudy)
server.get("/give-classes", pageGiveClasses)

server.listen(3333)