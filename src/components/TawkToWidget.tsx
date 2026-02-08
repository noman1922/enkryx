"use client";

import { useEffect } from "react";

// In a real app, this should be an environment variable
const TAWK_PROPERTY_ID = "YOUR_PROPERTY_ID";
const TAWK_WIDGET_ID = "YOUR_WIDGET_ID";

export default function TawkToWidget() {
    useEffect(() => {
        if (TAWK_PROPERTY_ID === "YOUR_PROPERTY_ID") return;

        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`;
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        if (s0 && s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        }
    }, []);

    return null;
}
