const mongoose = require('mongoose');
const { Schema } = mongoose;

  const mascotaSchema = new Schema({
    name: String,
    description: String,
    raza:  {
      pais: String,
      origen: String,
      uso: String,
    },
  });

  const Mascota = mongoose.model('Mascota', mascotaSchema);

  module.exports = Mascota;
