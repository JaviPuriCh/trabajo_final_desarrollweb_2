const express = require('express');
const router = express.Router();
const Libro = require('../models/Libro')

// Crear una libro
router.post('/', async (req, res) => {
    try {
        const newLibro = new Libro(req.body);
        const savedLibro = await newLibro.save();
        res.status(201).json(savedLibro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Obtener todos los Libros
router.get('/', async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un libro por ID
router.get('/:id', async (req, res) => {
    try {
        const libro = await Libro.findById(req.params.id);
        if (!libro) return res.status(404).json({ message: 'No se encontró el libro' });
        res.json(libro);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Actualizar un lbro
router.put('/:id', async (req, res) => {
    try {
        const updatedLibro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLibro) return res.status(404).json({ message: 'No se encontr´el libro' });
        res.json(updatedLibro);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un libro
router.delete('/:id', async (req, res) => {
    try {
        const deletedLibro = await Libro.findByIdAndDelete(req.params.id);
        if (!deletedLibro) return res.status(404).json({ message: 'No se encontró el autor' });
        res.json({ message: 'Libro eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;