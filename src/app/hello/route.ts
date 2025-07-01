import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const trips = await prisma.trip.findMany();
    return new NextResponse(JSON.stringify(trips), { status: 200 });
  } catch (error) {
    return new NextResponse("Error", { status: 404 });
  }
}
