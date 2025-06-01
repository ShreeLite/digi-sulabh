const express = require('express');
const {
    GetAllCleaners,
    GetSingleCleaner,
    AddCleaner,
    UpdateCleaner,
    DeleteCleaner
} = require('../controllers/cleanerController');

const router = express.Router();

// GET /api/cleaner
// Get all cleaners
router.get('/', GetAllCleaners);

// GET /api/cleaner/:id
// Get a single cleaner by ID
router.get('/:id', GetSingleCleaner);

// POST /api/cleaner
// Add a new cleaner
router.post('/', AddCleaner);

// PUT /api/cleaner/:id
// Update a cleaner
router.put('/:id', UpdateCleaner);

// DELETE /api/cleaner/:id
// Delete a cleaner
router.delete('/:id', DeleteCleaner);

module.exports = router;
