import { NextResponse } from "next/server"
import { saveContactSubmission } from "@/lib/db"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Validate the data
    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Save the contact submission
    const submission = await saveContactSubmission({
      name: data.name,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    })

    return NextResponse.json({ success: true, data: submission }, { status: 201 })
  } catch (error) {
    console.error("Error saving contact submission:", error)
    return NextResponse.json({ error: "Failed to save contact submission" }, { status: 500 })
  }
}

