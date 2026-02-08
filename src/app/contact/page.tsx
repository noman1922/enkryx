import MainLayout from "@/components/MainLayout";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function ContactPage() {
    return (
        <MainLayout>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">Contact Us</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Have a project in mind? We'd love to hear from you. Reach out via the form below or through our direct channels.
                        </p>
                    </div>

                    <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-black">Get in touch</h2>
                            <p className="mt-6 text-lg text-gray-600">
                                Whether you're looking for a quick quote or a long-term technical partner, we're here to help you build the systems you need.
                            </p>

                            <dl className="mt-10 space-y-6">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none text-teal font-bold uppercase tracking-widest text-xs">Email</dt>
                                    <dd className="text-black font-semibold">enkryx@gmail.com</dd>
                                </div>
                                <div className="flex gap-x-4">
                                    <dt className="flex-none text-teal font-bold uppercase tracking-widest text-xs">WhatsApp</dt>
                                    <dd>
                                        <Link
                                            href="https://wa.me/yournumber"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black font-semibold hover:text-teal"
                                        >
                                            Chat with us
                                        </Link>
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-10">
                                <Link
                                    href="https://wa.me/yournumber"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-x-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-all"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.43c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Chat on WhatsApp
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <CTASection />
        </MainLayout>
    );
}
