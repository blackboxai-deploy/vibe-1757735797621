import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create contact object
    const contact = {
      id: Date.now().toString(),
      name,
      email,
      message,
      date: new Date().toISOString(),
      responded: false,
      adminEmail: 'hypescript86@gmail.com' // Your email for reference
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to hypescript86@gmail.com
    // 3. Send confirmation email to the user
    
    // For now, we'll return success (the frontend handles localStorage)
    console.log('New contact submission:', contact)

    return NextResponse.json({
      success: true,
      message: 'Contact message received successfully',
      contact
    })

  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint',
    adminEmail: 'hypescript86@gmail.com',
    status: 'active'
  })
}