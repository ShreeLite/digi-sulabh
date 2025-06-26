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
    enum: ['Cleanliness', 'Maintenance', 'Other'],
    required: true
  },
  priorityLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true
  },
  statusofComplaint: {
    type: String,
    enum: ['Open', 'In progress', 'Resolved'],
    default: 'Open'
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
