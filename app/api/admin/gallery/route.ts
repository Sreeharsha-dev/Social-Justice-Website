import { NextResponse } from "next/server"

// GET: Fetch all gallery items
export async function GET() {
  try {
    // In a real application, you would fetch gallery items from your database
    const galleryItems = [] // Placeholder

    return NextResponse.json({ galleryItems })
  } catch (error) {
    console.error("Error fetching gallery items:", error)
    return NextResponse.json({ error: "Failed to fetch gallery items" }, { status: 500 })
  }
}

// POST: Create a new gallery item
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the data
    if (!data.title || !data.image || !data.description) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would save this to your database
    const galleryItem = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date(),
    }

    return NextResponse.json({ success: true, data: galleryItem }, { status: 201 })
  } catch (error) {
    console.error("Error creating gallery item:", error)
    return NextResponse.json({ error: "Failed to create gallery item" }, { status: 500 })
  }
}

