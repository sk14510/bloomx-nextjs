import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Love Kundli",
    description: "Love Kundli analysis and compatibility",
};

export default function LoveKundliLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="love-kundli-layout">
            {children}
        </div>
    );
}