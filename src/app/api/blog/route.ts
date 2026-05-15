import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "6");
    const offset = parseInt(searchParams.get("offset") || "0");
    const category = searchParams.get("category") || "";

    const where: { published: boolean; category?: string } = { published: true };
    if (category && category !== "All") {
      where.category = category;
    }

    const posts = await db.blogPost.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
    });

    const total = await db.blogPost.count({ where });

    return NextResponse.json({ posts, total });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
