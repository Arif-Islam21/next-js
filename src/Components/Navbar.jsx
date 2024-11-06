"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  console.log(pathName);

  const links = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "services",
      path: "/services",
    },
    {
      title: "Contacts",
      path: "/Contacts",
    },
  ];

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
      </ul>
    </nav>
  );
}
