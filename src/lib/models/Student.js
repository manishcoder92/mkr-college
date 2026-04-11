import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
  rollNumber: { type: String, required: true, unique: true, index: true },
  dob: { type: Date, required: true },
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String },
  course: { type: String, required: true },
  year: { type: String, required: true },
  session: { type: String, required: true },
  examType: { type: String, default: 'Annual Examination' },
  subjects: [{ type: String }],
  photo: { type: String, default: '' },
  examCenter: { type: String, default: 'M.K.R. DR. G.R.D COLLEGE' },
  enrollmentNumber: { type: String },
}, { timestamps: true });

export default mongoose.models.Student || mongoose.model('Student', StudentSchema);
