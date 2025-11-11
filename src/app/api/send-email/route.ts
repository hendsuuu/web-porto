import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// 🧩 Helper untuk sanitize input server-side
function sanitizeInput(text: string): string {
  return text
    .replace(/<script.*?>.*?<\/script>/gi, "")
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
}

// 🧩 Helper validasi email
function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function POST(req: Request) {
  try {
    const { subject, message, userEmail } = await req.json();

    if (!subject || !message || !userEmail) {
      return NextResponse.json({ success: false, error: "Missing fields" });
    }

    if (!isValidEmail(userEmail)) {
      return NextResponse.json({ success: false, error: "Invalid email" });
    }

    // 🔒 Sanitize semua input
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `[Portfolio Message] ${cleanSubject} (from ${userEmail})`,
      text: `From: ${userEmail}\n\n${cleanMessage}`,
      replyTo: userEmail,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(" Email send failed:", error);
    return NextResponse.json({ success: false, error: "Server error" });
  }
}
