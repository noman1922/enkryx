"use client";

import React from "react";
import NextImage from "next/image";

const logos = [
    { img: "/images/1.png" },
    { img: "/images/2.png" },
    { img: "/images/3.png" },
    { img: "/images/4.png" },
    { img: "/images/5.png" },
    { img: "/images/6.png" },
    { img: "/images/7.png" },
    { img: "/images/8.png" },
    { img: "/images/9.png" }
];

export default function LogoSlider() {
    return (
        <section className="bg-gray-50 py-12 overflow-hidden border-y border-gray-100">
            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-25%); }
                }
                .scroll-container {
                    display: flex;
                    width: max-content;
                    animation: scroll 60s linear infinite;
                }
                .scroll-container:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
                <p className="text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
                    Trusted by partners and clients worldwide
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <div className="scroll-container gap-12 sm:gap-20 items-center whitespace-nowrap px-4">
                    {/* Quadruple the logos to ensure perfectly seamless sliding on all screen sizes */}
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <div className="relative h-12 w-32 sm:h-16 sm:w-40">
                                <NextImage
                                    src={logo.img}
                                    alt="Partner logo"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
