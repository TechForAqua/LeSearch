import { NextResponse } from "next/server"

export async function GET() {
  try {
    const workerUrl = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js"
    const response = await fetch(workerUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch PDF worker: ${response.statusText}`)
    }

    const workerCode = await response.text()

    return new NextResponse(workerCode, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch (error) {
    console.error("Error fetching PDF worker:", error)
    return new NextResponse("Error loading PDF worker", { status: 500 })
  }
}

