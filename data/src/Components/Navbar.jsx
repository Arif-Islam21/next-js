import Link from "next/link";

export default function Navbar() {
  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "House",
      path: "/house",
    },
  ];

  return (
    <div>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
