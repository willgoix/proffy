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

// functions
function getSubject(subjectId) {
    return subjects[subjectId - 1]
}

function convertTimeToMinutes(time) {
    const [hours, minutes] = time.split(':')

    return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertTimeToMinutes
}