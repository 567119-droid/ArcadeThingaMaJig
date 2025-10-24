import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-white">
        🎮 ArcadeVault
      </Link>
      <div className="space-x-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
