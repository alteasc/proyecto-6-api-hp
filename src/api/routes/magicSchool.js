const {
  getSchools,
  postSchools,
  updateSchool,
  deleteSchool,
  getSchoolsById,
  getAlumnsBySchool
} = require('../controllers/magicSchool')

const schoolRoutes = require('express').Router()

schoolRoutes.get('/:id/alumnos', getAlumnsBySchool)
schoolRoutes.get('/:id', getSchoolsById)
schoolRoutes.get('/', getSchools)
schoolRoutes.post('/', postSchools)
schoolRoutes.put('/:id', updateSchool)
schoolRoutes.delete('/:id', deleteSchool)

module.exports = schoolRoutes
