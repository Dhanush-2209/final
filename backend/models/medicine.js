const mongoose = require('mongoose');

// Define a medicine schema
const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    session: { type: String, required: true },
    time: { type: String, required: true },
    days: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['autoOff', 'autoAlarm'], default: 'autoOff' }, // Medicine state
    addedAt: { type: Date, default: Date.now }, // New field to store the date and time of addition
    state: { type: String, default: 'autooff' },
    previousState: { type: String, default: null }, // Add this field
    manualAlarmTime: { type: Date, default: null },

});

// Create the medicine model
const Medicine = mongoose.models.Medicine || mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
