const mongoose = require('mongoose')
const magicSchools = require('../../data/magicSchools')
const magicSchool = require('../../api/models/magicSchool')

mongoose
  .connect(
    'mongodb+srv://bbdd_hp_sc:RdPkqAwmqMH0MK9q@cluster0.e0uff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(async () => {
    const allSchools = await magicSchool.find()
    if (allSchools.length) {
      await magicSchool.collection.drop()
    }
    console.log('Escuelas mágicas eliminadas')
  })
  .catch((error) => console.log(`Error borrando colección: ${error}`))
  .then(async () => {
    await magicSchool.insertMany(magicSchools)
    console.log('Escuelas mágicas insertadas')
  })
  .catch((error) => console.log(`Error insertando datos: ${error}`))
  .finally(() => mongoose.disconnect())
