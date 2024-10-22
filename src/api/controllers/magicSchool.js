const magicSchool = require('../models/magicSchool')

const getSchools = async (req, res, next) => {
  try {
    const allSchools = await magicSchool.find().populate('alumnos')
    return res.status(200).json(allSchools)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getSchoolsById = async (req, res, next) => {
  try {
    const { id } = req.params
    const schools = await magicSchool.findById(id).populate('alumnos')
    return res.status(200).json(schools)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getAlumnsBySchool = async (req, res, next) => {
  try {
    const { id } = req.params
    const schools = await magicSchool.findById(id).populate('alumnos')
    return res.status(200).json(schools.alumnos)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postSchools = async (req, res, next) => {
  try {
    const newSchool = new magicSchool({
      nombre: req.body.nombre,
      ubicacion: req.body.ubicacion,
      director: req.body.director
    })
    const schoolSaved = await newSchool.save()
    return res.status(201).json(schoolSaved)
  } catch (error) {
    return res.status(400).json('Ha fallado la creación de escuelas de magia')
  }
}

const updateSchool = async (req, res, next) => {
  try {
    const { id } = req.params
    const oldSchool = await magicSchool.findById(id)
    const newSchool = new magicSchool(req.body)
    newSchool._id = id
    newSchool.alumnos = [...oldSchool.alumnos, ...req.body.alumnos]
    const schoolUpdated = await magicSchool.findByIdAndUpdate(id, newSchool, {
      new: true
    })
    return res.status(200).json(schoolUpdated)
  } catch (error) {
    return res.status(400).json('Ha fallado la actualización de la escuela')
  }
}

const deleteSchool = async (req, res, next) => {
  try {
    const { id } = req.params
    const schoolDeleted = await magicSchool.findByIdAndDelete(id)
    return res.status(200).json(schoolDeleted)
  } catch (error) {
    return res.status(400).json('Ha fallado el borrado de la escuela')
  }
}

module.exports = {
  getSchools,
  getSchoolsById,
  getAlumnsBySchool,
  postSchools,
  updateSchool,
  deleteSchool
}
