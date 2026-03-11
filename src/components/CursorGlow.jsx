import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="pointer-events-none fixed z-[9999] w-[380px] h-[380px] rounded-full blur-[100px] mix-blend-screen"
            style={{
                left: pos.x,
                top: pos.y,
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(0, 111, 135, 0.45) 0%, rgba(0, 180, 210, 0.15) 50%, transparent 75%)",
            }}
        />
    );
}
