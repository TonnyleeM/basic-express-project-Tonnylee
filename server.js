const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/contact', (req, res) => {
    res.send('Contact us at hello@example.com')
})

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
]

app.get('/users', (req, res) => {
    res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id
    res.json({ id: id })
})

app.post('/users', (req, res) => {
    const user = req.body
    users.push(user)
    res.json({ message: 'User received', user: user })
})

app.get('/search', (req, res) => {
    const name = req.query.name
    res.send('You searched for ' + name)
})

const courses = [
    { id: 1, title: 'Math' },
    { id: 2, title: 'English' },
    { id: 3, title: 'Computer Science' }
]

app.get('/courses', (req, res) => {
    res.json(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    res.json({ id: id })
})

app.post('/courses', (req, res) => {
    const course = req.body
    courses.push(course)
    res.json({ message: 'Course added', course: course })
})

app.listen(port, () => {
    console.log('Server running on port ' + port)
})
