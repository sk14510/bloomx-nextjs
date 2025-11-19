import React from "react";
import Link from "next/link";
import { usePageView } from "../hooks/usePageView";

// Note: metadata exports must be defined in a Server Component (e.g. a layout or
// server page). This file is a Client Component (it uses `useEffect`), so
// exporting `metadata` here would be invalid. Move metadata to a server file
// if you need it for this route.
export default function AboutPage(): React.ReactElement {
 
  return (
    <main style={styles.main}>
      <h1 style={styles.h1}>About BloomX</h1>
      <p style={styles.p}>
        BloomX is a modern web platform focused on building delightful user
        experiences with performance and accessibility in mind.
      </p>

      <section style={styles.section}>
        <h2 style={styles.h2}>Our mission</h2>
        <p style={styles.p}>
          To empower teams to ship faster by combining thoughtful design and
          scalable engineering.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Get in touch</h2>
        <p style={styles.p}>
          Learn more on the <Link href="/">homepage</Link> or reach out via your
          preferred channel.
        </p>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    maxWidth: 880,
    margin: "4rem auto",
    padding: "0 1rem",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#111827",
  },
  h1: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  h2: {
    fontSize: "1.125rem",
    marginTop: "1.5rem",
    marginBottom: "0.5rem",
  },
  p: {
    lineHeight: 1.6,
    color: "#374151",
    margin: 0,
  },
  section: {
    marginTop: "1rem",
  },
};
