import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Notice from '@/lib/models/Notice';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  await dbConnect();
  const now = new Date();
  
  try {
    const activeNotices = await Notice.find({
      $or: [
        // Notices with valid date range
        { validFrom: { $lte: now }, validUntil: { $gt: now } },
        // Notices without date restrictions (both missing)
        { validFrom: { $exists: false }, validUntil: { $exists: false } },
        // Notices with only validFrom set (no expiry)
        { validFrom: { $lte: now }, validUntil: { $exists: false } },
        // Notices with null dates
        { validFrom: null, validUntil: null },
      ]
    }).sort({ createdAt: -1 });
    
    return NextResponse.json(
      { success: true, notices: activeNotices },
      { headers: { 'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0' } }
    );
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
