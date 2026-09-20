import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const data = await request.json()
    // In production, replace this with an email provider or database
    console.log('Contact form submission:', data)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ ok: false, error: String(err) }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: 'Contact endpoint' })
}
