// components/CreateGame.tsx
"use client";

import { useState } from "react";
import axios from "axios";

const CreateGame = () => {
  const [playerBlack, setPlayerBlack] = useState("");
  const [playerWhite, setPlayerWhite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/games/", {
        player_black: playerBlack,
        player_white: playerWhite,
      });
      alert("Game created successfully");
    } catch (error) {
      console.error("There was an error creating the game!", error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-5 border rounded">
      <h2 className="text-2xl font-bold mb-5">Create a New Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Player Black</label>
          <input
            type="text"
            value={playerBlack}
            onChange={(e) => setPlayerBlack(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Player White</label>
          <input
            type="text"
            value={playerWhite}
            onChange={(e) => setPlayerWhite(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Create Game
        </button>
      </form>
    </div>
  );
};

export default CreateGame;
