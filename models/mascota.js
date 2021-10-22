const mongoose = require('mongoose');
const { Schema } = mongoose;

  const mascotaSchema = new Schema({
    name: String,
    description: String
  });

  const Mascota = mongoose.model('Mascota', mascotaSchema);

  module.exports = Mascota;
