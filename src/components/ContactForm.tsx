"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("https://formspree.io/f/xdalkoyq", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="glass-card rounded-[2rem] p-10 lg:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-black">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="mt-3 block w-full rounded-2xl bg-white/50 border border-black/5 px-6 py-4 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-black">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="mt-3 block w-full rounded-2xl bg-white/50 border border-black/5 px-6 py-4 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-black">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        className="mt-3 block w-full rounded-2xl bg-white/50 border border-black/5 px-6 py-4 text-black shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-teal focus:border-transparent outline-none transition-all resize-none"
                    />
                </div>
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-teal px-8 py-5 text-center text-xl font-bold text-white shadow-xl shadow-teal/20 transition-all hover:bg-teal-dark hover:scale-[1.02] disabled:bg-teal/50"
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                    <div className="mt-6 rounded-2xl bg-green-50 p-4 border border-green-100 flex items-center justify-center gap-3">
                        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-sm font-bold text-green-700 uppercase tracking-tight">
                            Message received! We'll get back to you soon.
                        </p>
                    </div>
                )}

                {status === "error" && (
                    <div className="mt-6 rounded-2xl bg-red-50 p-4 border border-red-100 flex items-center justify-center gap-3">
                        <svg className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <p className="text-sm font-bold text-red-700 uppercase tracking-tight">
                            Something went wrong. Please try again.
                        </p>
                    </div>
                )}
            </form>
        </div>
    );
}
