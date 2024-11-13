import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <div className="p-24">
      {blogPages.map((blog, idx) => (
        <div key={idx} className="border-2 my-2 rounded-md p-12">
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="bg-orange-500 p-2 mt-4 rounded-md">
            <Link href={`/blogs/${blog.slug}`}> View Details</Link>
          </button>
        </div>
      ))}
    </div>
  );
}

const blogPages = [
  {
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js: The React Framework for Production",
    description:
      "Learn the basics of Next.js, the popular React framework that enables server-side rendering and static site generation for better performance and SEO.",
  },
  {
    slug: "understanding-typescript",
    title: "Understanding TypeScript: A Beginner's Guide",
    description:
      "Explore the fundamentals of TypeScript, a typed superset of JavaScript that helps you build safer and more manageable code in large-scale applications.",
  },
  {
    slug: "top-react-hooks",
    title: "Top 10 React Hooks for Developers",
    description:
      "Discover the most useful React hooks that can simplify your code, enhance component logic, and improve performance in React applications.",
  },
  {
    slug: "css-flexbox-guide",
    title: "A Comprehensive Guide to CSS Flexbox",
    description:
      "Master CSS Flexbox with this step-by-step guide, which covers everything from the basics to advanced techniques for creating flexible and responsive layouts.",
  },
  {
    slug: "optimizing-seo-in-nextjs",
    title: "Optimizing SEO in Next.js Applications",
    description:
      "Boost your Next.js app's SEO with these best practices, covering topics like meta tags, structured data, server-side rendering, and more.",
  },
];
