const mongoose = require('mongoose')

const textSchema = new mongoose.Schema({
    text:{
        type: 'string',
        required: true,
        
    }
})

const textModels = mongoose.model('ModelName', textSchema);

module.exports  = textModels;