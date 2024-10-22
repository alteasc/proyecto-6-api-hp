const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true, unique: true },
    muggle: { type: Boolean, required: true },
    especie: { type: String, required: true },
    profesion: { type: String, required: true },
    estatus_de_sangre: [
      {
        type: String,
        required: true,
        enum: ['sangre pura', 'mestizo', 'squib', 'hijo de muggle', 'humano']
      }
    ],
    escuela: {
      type: mongoose.Types.ObjectId,
      ref: 'magicSchools'
    },
    apoyo: { type: String },
    varita: { type: String }
  },
  {
    timestamps: true,
    collection: 'characters'
  }
)

const Character = mongoose.model('characters', characterSchema, 'characters')

module.exports = Character
