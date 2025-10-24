import GameCard from "../components/GameCard";

const games = [
  { id: "2048", title: "2048", description: "Combine tiles to reach 2048!", img: "/assets/2048.png" },
  { id: "hexgl", title: "HexGL", description: "High-speed futuristic racing.", img: "/assets/hexgl.png" },
  { id: "clumsy-bird", title: "Clumsy Bird", description: "Flap through the pipes!", img: "/assets/clumsy.png" },
  { id: "tetris", title: "Tetris", description: "Stack blocks and clear lines!", img: "/assets/tetris.png" },
  { id: "snake", title: "Snake", description: "Eat, grow, and survive!", img: "/assets/snake.png" },
  { id: "tower", title: "Tower Game", description: "Build the tallest tower!", img: "/assets/tower.png" }
];

export default function Home() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {games.map((g) => (
        <GameCard key={g.id} game={g} />
      ))}
    </div>
  );
}
