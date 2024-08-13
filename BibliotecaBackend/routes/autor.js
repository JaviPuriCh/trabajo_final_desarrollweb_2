const express = require('express');
const router = express.Router();
const Autor = require('../models/Autor')

// Crear una utor
router.post('/', async (req, res) => {
    try {
        const newAutor = new Autor(req.body);
        const savedAutor = await newAutor.save();
        res.status(201).json(savedAutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los autores
router.get('/', async (req, res) => {
    try {
        const autores = await Autor.find();
        res.json(autores);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un autor por ID
router.get('/:id', async (req, res) => {
    try {
        const autor = await Autor.findById(req.params.id);
        if (!autor) return res.status(404).json({ message: 'No se encontró el autor' });
        res.json(autor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un autor
router.put('/:id', async (req, res) => {
    try {
        const updatedAutor = await Autor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAutor) return res.status(404).json({ message: 'No se encontr´el autor' });
        res.json(updatedAutor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un autor
router.delete('/:id', async (req, res) => {
    try {
        const deletedAutor = await Autor.findByIdAndDelete(req.params.id);
        if (!deletedAutor) return res.status(404).json({ message: 'No seencontró el autor' });
        res.json({ message: 'Autor eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;