"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const router = useRouter();

  const handler = () => {
    router.push("/login");
  };

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/Contacts",
    },
    {
      title: "Categories",
      path: "/categories",
    },
    {
      title: "Dashboard",
      path: "/dashboard",
    },
  ];

  if (pathName.includes("dashboard")) {
    return (
      <div className="flex justify-between bg-red-600 p-6">
        <h2>Dashboard</h2>
        <ul className="flex gap-4">
          <li>Create User</li>
          <li>Update User</li>
          <li>Manage User</li>
        </ul>
      </div>
    );
  }

  return (
    <nav className="flex justify-between bg-cyan-400 items-center px-12 text-black py-6">
      <h6>LoGo</h6>
      <ul className="flex items-center gap-4">
        {links.map((item, idx) => (
          <li
            className={`${
              pathName === item.path &&
              "text-orange-700 bg-white px-6 py-2 rounded-lg"
            }`}
            key={idx}
          >
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
        <button
          onClick={handler}
          className="px-6 py-2 font-bold bg-white text-orange-600 rounded-lg"
        >
          Login
        </button>
      </ul>
    </nav>
  );
}
