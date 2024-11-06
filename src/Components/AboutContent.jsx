import Link from "next/link";
import React from "react";

export default function AboutContent() {
  return (
    <div className="flex flex-col space-y-3">
      <Link href="/about/history">History</Link>
      <Link href="/about/mission">Mission</Link>
    </div>
  );
}
