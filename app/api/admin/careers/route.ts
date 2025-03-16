import { NextResponse } from "next/server"

// GET: Fetch all career opportunities
export async function GET() {
  try {
    // In a real application, you would fetch careers from your database
    const careers = [] // Placeholder

    return NextResponse.json({ careers })
  } catch (error) {
    console.error("Error fetching careers:", error)
    return NextResponse.json({ error: "Failed to fetch careers" }, { status: 500 })
  }
}

// POST: Create a new career opportunity
export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the data
    if (!data.title || !data.type || !data.description || !data.responsibilities || !data.requirements) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would save this to your database
    const career = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date(),
    }

    return NextResponse.json({ success: true, data: career }, { status: 201 })
  } catch (error) {
    console.error("Error creating career:", error)
    return NextResponse.json({ error: "Failed to create career" }, { status: 500 })
  }
}

