const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

CarSchema.plugin(mongoosePaginate);

mongoose.model('Car', CarSchema);