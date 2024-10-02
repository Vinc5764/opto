import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'], // Email validation
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10,15}$/, 'is invalid'], // Phone number validation (10-15 digits)
  },
  service: {
    type: String,
    required: true,
    enum: [
      'General Eyecare', 
      'Pediatric Optometry', 
      'Geriatric Optometry', 
      'OCT/VFT', 
      'Contact Lens Fitting', 
      'Low Vision', 
      'Binocular Vision'
    ],
  },
  appointmentDate: {
    type: Date,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Middleware to update the `updatedAt` field on updates

const User = models.Users || model("Users", userSchema);
export default User

