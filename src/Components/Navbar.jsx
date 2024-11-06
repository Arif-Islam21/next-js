export default function Navbar() {
  return (
    <nav className="flex justify-between bg-cyan-400 items-center px-12 text-black py-6">
      <h6>LoGo</h6>
      <ul className="flex gap-4">
        <li>About</li>
        <li>Service</li>
        <li>Contact</li>
        <li>Support</li>
      </ul>
    </nav>
  );
}
