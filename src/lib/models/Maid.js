// /lib/models/Maid.js
import mongoose from 'mongoose';

const MaidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathersName: {
    type: String,
    required: true,
  },
  grandFathersName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  imageKey: {
    type: String,
    required: true,
  },
  pricePerMonth: {
    type: Number,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  experience: [{
    type: String,
  }],
  review: [{
    type: String,
  }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  documentUrl: {
    type: String,
    required: false,
  },
  documentKey: {
    type: String,
    required: false,
  },
  documentName: {
    type: String,
    required: false,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  languages: [{
    type: String,
  }],
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
    required: true, // Height in centimeters
  },
  weight: {
    type: Number,
    required: true, // Weight in kilograms
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  skills: [{
    type: String,
  }],
  educationalLevel: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Maid || mongoose.model('Maid', MaidSchema);
