const {
  getCharacters,
  postCharacter,
  updateCharacter,
  deleteCharacter,
  getCharactersEspecie
} = require('../controllers/character')

const characterRoutes = require('express').Router()

characterRoutes.get('/getByEspecie/:especie', getCharactersEspecie)
characterRoutes.get('/', getCharacters)
characterRoutes.post('/', postCharacter)
characterRoutes.put('/:id', updateCharacter)
characterRoutes.delete('/:id', deleteCharacter)

module.exports = characterRoutes
