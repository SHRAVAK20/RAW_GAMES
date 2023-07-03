import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
