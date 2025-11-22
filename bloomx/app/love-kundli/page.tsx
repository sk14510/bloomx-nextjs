import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function LoveKundliPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.tagline}>
              For anyone whose love life is not working
            </p>
            <h1 className={styles.heading}>
              If Your Problem Is Love, Partner, Or Relationship – This Love
              Kundli Is For You.
            </h1>
            <p className={styles.desc}>
              No love, wrong love, delayed marriage, toxic patterns, on-off
              relationships…
            </p>
            <h4 className={styles.subheading}>
              <span>LOVE KUNDLI by Astro Roshita</span> is a personalised report
              that explains why this is happening and how to fix it using your
              Janam Kundli.
            </h4>
            <button className={styles.button}>Get Your Personalised Love Kundli</button>
            <p className={styles.note}>
              100% private • Based on your birth details • Focused only on love,
              partner & relationships
            </p>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="https://reports.astroroshita.com/wp-content/uploads/2025/11/Roshita-ji.webp"
              alt="image of roshita"
              width={450}
              height={800}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
