import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Notice from '@/lib/models/Notice';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  await dbConnect();
  const now = new Date();
  
  try {
    const activeNotices = await Notice.find({
      validFrom: { $lte: now },
      validUntil: { $gt: now }
    }).sort({ createdAt: -1 });
    
    return NextResponse.json({ success: true, notices: activeNotices });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch notices' }, { status: 500 });
  }
}

export async function POST(request) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  const decoded = verifyToken(token);

  if (!decoded || decoded.role !== 'admin') {
    return NextResponse.json({ success: false, message: 'Forbidden' }, { status: 403 });
  }

  await dbConnect();

  try {
    const body = await request.json();

    // If both texts are empty, treat as a command to clear custom notices
    if (!body.textEn?.trim() && !body.textHi?.trim()) {
      await Notice.deleteMany({});
      return NextResponse.json({ success: true, message: 'All custom notices cleared. Displaying default.' });
    }
    if (!body.validFrom) delete body.validFrom;
    if (!body.validUntil) delete body.validUntil;

    const newNotice = await Notice.create(body);
    return NextResponse.json({ success: true, notice: newNotice });
  } catch (error) {
    console.error('Failed to create notice:', error);
    return NextResponse.json({ success: false, error: 'Failed to add notice: ' + error.message }, { status: 500 });
  }
}
