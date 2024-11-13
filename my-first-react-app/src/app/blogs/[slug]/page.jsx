export default function BlogsDetails({ params }) {
  const { title, description } = blogPages.find(
    (blog) => blog.slug == params.slug
  );

  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
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
