const mongoose = require('mongoose')

const schoolSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    ubicacion: { type: String, required: true },
    director: { type: String },
    alumnos: [{ type: mongoose.Types.ObjectId, ref: 'characters' }]
  },
  {
    timestamps: true,
    collection: 'magicSchools'
  }
)

const magicSchool = mongoose.model('magicSchools', schoolSchema, 'magicSchools')

module.exports = magicSchool
