import { NextResponse } from 'next/server';
import { signToken, validateAdmin } from '@/lib/auth';

export async function POST(request) {
  try {
    const { id, password } = await request.json();

    if (validateAdmin(id, password)) {
      const token = signToken({ role: 'admin' });
      return NextResponse.json({ success: true, token });
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}
