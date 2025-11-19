import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about us",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* You can add a header or other layout components here */}
      {children}
    </div>
  );
}
