import { useState, useEffect } from "react";
import axios from "axios";
import WGo from "wgo";

interface Game {
  player_black: string;
  player_white: string;
  sgf_data: string;
  player_black_turn: boolean;
}

const GoGame = ({ gameId }: { gameId: number }) => {
  const [game, setGame] = useState<Game | null>(null);
  const [sgfData, setSgfData] = useState("");

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/games/${gameId}/`
        );
        setGame(response.data);
        setSgfData(response.data.sgf_data);
      } catch (error) {
        console.error("There was an error fetching the game!", error);
      }
    };
    fetchGame();
  }, [gameId]);

  const handleMove = async (x: number, y: number) => {
    try {
      const move = `;${game?.player_black_turn? "B" : "W"}[${x}${y}]`;
      const response = await axios.post(
        `http://localhost:8000/api/games/${gameId}/make_move/`,
        {
          move: move,
        }
      );
      setSgfData(response.data.sgf_data);
    } catch (error) {
      console.error("There was an error making a move!", error);
    }
  };

  if (!game) return <div>Loading...</div>;

  return (
    <div className="game-container">
      <h2 className="text-2xl font-bold mb-5">
        Game between {game.player_black} and {game.player_white}
      </h2>
      <GoBoard sgfData={sgfData} onMove={handleMove} />
    </div>
  );
};

export default GoGame;
