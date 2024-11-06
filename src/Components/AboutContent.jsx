import Link from "next/link";
import React from "react";

export default function AboutContent() {
  return (
    <div>
      <Link href="/history">History</Link>
      <Link href="/mission">Mission</Link>
    </div>
  );
}
