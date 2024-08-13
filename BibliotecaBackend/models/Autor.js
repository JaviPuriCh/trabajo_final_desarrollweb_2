const mongoose =require('mongoose')

const AutorSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    apellidos: {
        type: String,
        required:true
    },
});

module.exports = mongoose.model('Autor', AutorSchema);


