const mongoose = require('mongoose')

const connectBBDD = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('BBDD funcionando correctamente')
  } catch (error) {
    console.log('La BBDD no se ha conectado')
  }
}

module.exports = {
  connectBBDD
}
