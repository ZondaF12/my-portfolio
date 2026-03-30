import type { Metadata } from "next";
import { roboto } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
    title: "Ruaridh Bell | Software Engineer",
    description: "Edinburgh",
    icons: {
        icon: "/icon.jpg",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
