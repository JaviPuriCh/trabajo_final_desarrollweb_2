const mongoose = require('mongoose');

const LibroSchema = new mongoose.Schema({
    titulo: { 
        type: String, 
        required: true 
    },
    editorial: { 
        type: String, 
        required: true 
    },
    isbn: { 
        type: String, 
        required: true 
    }
});

module.exports = mongoose.model('Libro', LibroSchema);