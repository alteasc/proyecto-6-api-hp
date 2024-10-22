const Character = require('../models/character')

const getCharacters = async (req, res, next) => {
  try {
    const allCharacters = await Character.find().populate('escuela')
    return res.status(200).json(allCharacters)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getCharactersEspecie = async (req, res, next) => {
  try {
    const { especie } = req.params
    const characters = await Character.find({ especie })
    return res.status(200).json(characters)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postCharacter = async (req, res, next) => {
  try {
    const newCharacter = new Character({
      nombre: req.body.nombre,
      muggle: req.body.muggle,
      especie: req.body.especie,
      profesion: req.body.profesion,
      estatus_de_sangre: req.body.estatus_de_sangre,
      apoyo: req.body.apoyo,
      varita: req.body.varita
    })
    const characterSaved = await newCharacter.save()
    return res.status(201).json(characterSaved)
  } catch (error) {
    return res.status(400).json('Ha fallado la creación del personaje')
  }
}

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldCharacter = await Character.findById(id)
    const newCharacter = new Character(req.body)
    newCharacter._id = id
    newCharacter.estatus_de_sangre = [
      ...oldCharacter.estatus_de_sangre,
      req.body.estatus_de_sangre
    ]
    const characterUpdated = await Character.findByIdAndUpdate(
      id,
      newCharacter,
      {
        new: true
      }
    )
    return res.status(200).json(characterUpdated)
  } catch (error) {
    return res.status(400).json('Ha fallado la actualización del personaje')
  }
}

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params
    const characterDeleted = await Character.findByIdAndDelete(id)
    return res.status(200).json(characterDeleted)
  } catch (error) {
    return res.status(400).json('Ha fallado el borrado del personaje')
  }
}

module.exports = {
  getCharacters,
  getCharactersEspecie,
  postCharacter,
  updateCharacter,
  deleteCharacter
}
