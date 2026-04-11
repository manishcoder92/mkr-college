import mongoose from 'mongoose';

const AdmissionSchema = new mongoose.Schema({
  applicationId: { type: String, required: true, unique: true, index: true },
  course: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  category: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  
  // Parent Details
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  fatherOccupation: { type: String },
  familyIncome: { type: String, required: true },
  
  // Academic Record
  hscBoard: { type: String, required: true },
  hscPassingYear: { type: String, required: true },
  hscRollNo: { type: String, required: true },
  hscMarks: { type: Number, required: true },
  hscPercentage: { type: String, required: true },
  
  // Address & Misc
  bloodGroup: { type: String },
  religion: { type: String },
  nationality: { type: String, default: 'Indian' },
  aadharNumber: { type: String, required: true },
  addressLine1: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  
  // Files stored in public/uploads/admissions/
  photo: { type: String, required: true },
  signature: { type: String, required: true },
  marksheettenth: { type: String, required: true },
  marksheettwelfth: { type: String, required: true },
  
  status: { 
    type: String, 
    enum: ['Pending', 'Approved', 'Rejected'], 
    default: 'Pending' 
  },
  remarks: { type: String }
}, { timestamps: true });

export default mongoose.models.Admission || mongoose.model('Admission', AdmissionSchema);
