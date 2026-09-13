import React from "react";
import type { Iplayer } from "../../types/playerType";
import Player from "./Player";

interface AvailablePlayersProps {
  players: Iplayer[];
  selectedIndexes: number[];
  onAdd: (index: number) => void;
}

const AvailablePlayers = ({ players, selectedIndexes, onAdd }: AvailablePlayersProps) => {
  return (
    <div className="grid grid-cols-3 gap-y-6 w-350 mt-10 ml-20">
      {players.map((player: Iplayer, index: number) => {
        return (
          <Player
            key={index}
            player={player}
            isSelected={selectedIndexes.includes(index)}
            onAdd={() => onAdd(index)}
          />
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
