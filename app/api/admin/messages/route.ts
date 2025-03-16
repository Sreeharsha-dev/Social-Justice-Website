import { NextResponse } from "next/server"
import { getContactSubmissions, markContactSubmissionAsRead, deleteContactSubmission } from "@/lib/db"

// GET: Fetch all contact submissions
export async function GET() {
  try {
    const submissions = await getContactSubmissions()

    return NextResponse.json({ submissions })
  } catch (error) {
    console.error("Error fetching contact submissions:", error)
    return NextResponse.json({ error: "Failed to fetch contact submissions" }, { status: 500 })
  }
}

// PATCH: Mark a contact submission as read
export async function PATCH(request: Request) {
  try {
    const data = await request.json()

    if (!data.id) {
      return NextResponse.json({ error: "Missing submission ID" }, { status: 400 })
    }

    await markContactSubmissionAsRead(data.id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating contact submission:", error)
    return NextResponse.json({ error: "Failed to update contact submission" }, { status: 500 })
  }
}

// DELETE: Delete a contact submission
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Missing submission ID" }, { status: 400 })
    }

    await deleteContactSubmission(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting contact submission:", error)
    return NextResponse.json({ error: "Failed to delete contact submission" }, { status: 500 })
  }
}

