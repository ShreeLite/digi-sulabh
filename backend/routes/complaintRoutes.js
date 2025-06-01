const express = require('express');
const {
    GetAllComplaints,
    GetSingleComplaint,
    AddComplaint,
    UpdateComplaint,
    DeleteComplaint
} = require('../controllers/complaintController');

const router = express.Router();

// GET /api/complaint
// Get all complaints
router.get('/', GetAllComplaints);

// GET /api/complaint/:id
// Get a single complaint by ID
router.get('/:id', GetSingleComplaint);

// POST /api/complaint
// Add a new complaint
router.post('/', AddComplaint);

// PUT /api/complaint/:id
// Update a complaint
router.put('/:id', UpdateComplaint);

// DELETE /api/complaint/:id
// Delete a complaint
router.delete('/:id', DeleteComplaint);

module.exports = router;
