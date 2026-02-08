"use client";

import { useEffect } from "react";

export default function TawkChat() {
    useEffect(() => {
        // Tawk.to Script Integration
        const tawk = () => {
            const s1 = document.createElement("script");
            const s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/6988fe6539c3861c362383d3/1jgvi3fhh';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode?.insertBefore(s1, s0);
        };

        tawk();
    }, []);

    return null; // This component doesn't render any UI, Tawk.to handles the widget
}
