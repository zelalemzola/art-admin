// /app/api/maids/[id]/route.js
import { connectdb } from '@/lib/config/db';
import Maid from '@/lib/models/Maid';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
  await connectdb();
};
LoadDB();

export async function GET(request, { params }) {
  const { id } = params;
  const maid = await Maid.findById(id).populate('category');
  
  if (!maid) {
    return NextResponse.json({ message: 'Maid not found' }, { status: 404 });
  }

  return NextResponse.json({ maid });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const updatedData = await request.json();
  
  const maid = await Maid.findByIdAndUpdate(id, updatedData, { new: true });
  
  if (!maid) {
    return NextResponse.json({ message: 'Maid not found' }, { status: 404 });
  }

  return NextResponse.json({ maid });
}

export async function DELETE(request, { params }) {
  const { id } = params;
  
  const deletedMaid = await Maid.findByIdAndDelete(id);
  
  if (!deletedMaid) {
    return NextResponse.json({ message: 'Maid not found' }, { status: 404 });
  }

  return NextResponse.json({ message: 'Maid deleted successfully' });
}
