import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link
      to={`/play/${game.id}`}
      className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-all"
    >
      <img src={game.img} alt={game.title} className="rounded-md mb-3" />
      <h2 className="text-xl font-bold">{game.title}</h2>
      <p className="text-gray-300">{game.description}</p>
    </Link>
  );
}
