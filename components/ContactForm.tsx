"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      const json = await res.json()
      if (json.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-xs tracking-[0.14em] uppercase text-white/45">Your Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-2 w-full px-4 h-12 rounded-[14px] bg-white/[0.04] border border-white/12 focus:outline-none focus:border-white/25" placeholder="Sanu Kumar" />
      </div>

      <div>
        <label className="block text-xs tracking-[0.14em] uppercase text-white/45">Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} required type="email" className="mt-2 w-full px-4 h-12 rounded-[14px] bg-white/[0.04] border border-white/12 focus:outline-none focus:border-white/25" placeholder="you@company.com" />
      </div>

      <div>
        <label className="block text-xs tracking-[0.14em] uppercase text-white/45">Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} className="mt-2 w-full px-4 py-3 rounded-[14px] bg-white/[0.04] border border-white/12 focus:outline-none focus:border-white/25 resize-none" placeholder="Tell me about your project, timeline, stack..." />
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" className="px-6 py-3 rounded-full bg-white text-black hover:bg-white/90 uppercase tracking-[0.14em] text-xs font-semibold">Preview Draft</button>
        {status === 'sending' && <span className="text-sm text-[var(--muted)]">Sending…</span>}
        {status === 'sent' && <span className="text-sm text-emerald-300">Message sent. Thanks.</span>}
        {status === 'error' && <span className="text-sm text-red-300">Error sending message.</span>}
      </div>
    </form>
  )
}
