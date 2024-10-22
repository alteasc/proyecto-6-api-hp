require('dotenv').config()
const express = require('express')
const { connectBBDD } = require('./src/config/db')
const schoolRoutes = require('./src/api/routes/magicSchool')
const characterRoutes = require('./src/api/routes/character')

const app = express()

connectBBDD()

app.use(express.json())

app.use('/api/v1/magicSchools', schoolRoutes)
app.use('/api/v1/characters', characterRoutes)

app.use('*', (req, res, next) => {
  return res.status(404).json('Route not found')
})

const PORT = 3000
app.listen(3000, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`)
})
