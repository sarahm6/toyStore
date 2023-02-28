const mongoose = require('mongoose');


const toySchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, 
        content: {type: String},
        image: {type: String}, 
        price: {type: Number},
        inventory: {type: Number}
      },
      { timestamps: true }
    );

const Toy = mongoose.model('toys', toySchema)

module.exports = Toy;