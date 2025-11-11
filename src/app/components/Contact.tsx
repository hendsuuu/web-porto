"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";

export default function Contact() {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🧩 Fungsi untuk validasi email
  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // 🧩 Fungsi untuk sanitize input agar aman dari script injection
  const sanitizeInput = (text: string) => {
    return text
      .replace(/<script.*?>.*?<\/script>/gi, "") // hapus <script>
      .replace(/<\/?[^>]+(>|$)/g, "") // hapus tag HTML
      .trim();
  };

  const handleSendEmail = async () => {
    if (!email || !subject || !message) {
      toast.error(" Please fill out all fields!");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error(" Please enter a valid email address!");
      return;
    }

    // 🔒 Sanitize sebelum kirim
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: cleanSubject,
          message: cleanMessage,
          userEmail: email,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success(" Email sent successfully!");
        setSubject("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(" Failed to send email.");
      }
    } catch (error) {
      console.error(error);
      toast.error(" Error occurred while sending email.");
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-full glass-item p-5 rounded-md">
      <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
        <Mail size={20} /> Contact Me
      </h2>

      <div className="flex flex-col gap-3">
        <input
  type="email"
  placeholder="Your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400
  focus:outline-none focus:border-sky-400 focus:bg-white/15
  caret-white transition cursor-default"
/>

<input
  type="text"
  placeholder="Subject"
  value={subject}
  onChange={(e) => setSubject(e.target.value)}
  className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400
  focus:outline-none focus:border-sky-400 focus:bg-white/15
  caret-white transition cursor-default"
/>

<textarea
  placeholder="Your message..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full h-32 p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400
  resize-none focus:outline-none focus:border-sky-400 focus:bg-white/15
  caret-white transition cursor-default"
/>


        <button
          onClick={handleSendEmail}
          disabled={loading}
          className={`mt-2 bg-white text-[#313647] font-semibold py-3 rounded-md transition duration-300 ${
            loading
              ? "opacity-70 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          {loading ? "Sending..." : "Send Email"}
        </button>
      </div>
    </div>
  );
}
