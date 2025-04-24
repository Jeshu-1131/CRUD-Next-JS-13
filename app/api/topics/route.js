import connectMDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 })
}

export async function GET() {
    try {
        await connectMDB();
        const topics = await Topic.find();
        return NextResponse.json({ topics });
    } catch (error) {
      console.error('API error:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

  export async function DELETE(request){
    const id=request.nextUrl.searchParams.get("id");
    await connectMDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic Deleted" }, { status: 200})
  }
