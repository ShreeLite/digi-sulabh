const mongoose = require('mongoose');
const complaintSchema = new mongoose.Schema({
  toiletId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Toilet',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  issueType: {
    type: String,
    enum: ['cleanliness', 'maintenance', 'other'],
    required: true
  },
  priorityLevel: {
    type: String,
    enum: ['low', 'medium', 'high'],
    required: true
  },
  statusofComplaint: {
    type: String,
    enum: ['open', 'in progress', 'resolved'],
    default: 'open'
  },
  submittedAt: {
    type: Date,
    default: Date.now
  },
  resolvedAt: Date,
  resolutionNote: String,
  submittedBy: String,  // contactInfo
  photoUrls: [String]   // optional
});

module.exports = mongoose.model('Complaint', complaintSchema);
