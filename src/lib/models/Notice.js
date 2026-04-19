import mongoose from 'mongoose';

const NoticeSchema = new mongoose.Schema({
  textEn: { type: String, default: '' },
  textHi: { type: String, default: '' },
  imageUrl: { type: String, default: null },
  validFrom: { type: Date },
  validUntil: { type: Date },
  isImportant: { type: Boolean, default: false },
}, { timestamps: true });

NoticeSchema.index({ validFrom: 1, validUntil: 1 });
export default mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);
