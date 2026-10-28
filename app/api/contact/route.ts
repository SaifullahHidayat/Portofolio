// app/api/contact/route.ts
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

// Fungsi sederhana untuk mencegah XSS
const escapeHtml = (str: string) => {
  return str.replace(/[&<>"']/g, (match) => {
    const map: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    };
    return map[match];
  });
};

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Data tidak lengkap' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', 
      to: [process.env.EMAIL_TO!],
      replyTo: email,
      subject: `Pesan Baru: ${subject}`,
      // Gunakan escapeHtml di sini
      html: `
        <h2>Pesan dari ${escapeHtml(name)}</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subjek:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Pesan:</strong></p>
        <p>${escapeHtml(message)}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error); // Tambahkan ini agar error terlihat di log Vercel
    return NextResponse.json({ error: 'Gagal mengirim email' }, { status: 500 });
  }
}