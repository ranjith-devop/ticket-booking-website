const express = require('express');
const Bus = require('../models/Bus');

const router = express.Router();

// GET all buses
router.get('/', async (req, res) => {
  try {
    const buses = await Bus.find();
    res.json(buses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST add a new bus
router.post('/', async (req, res) => {
  const bus = new Bus(req.body);
  try {
    await bus.save();
    res.status(201).json(bus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a bus
router.delete('/:id', async (req, res) => {
  try {
    await Bus.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bus deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
