import React from 'react';
import type { Iplayer } from '../../types/playerType';

interface PlayerProps {
  player: Iplayer;
  isSelected: boolean;
  onAdd: () => void;
}

const Player = ({ player, isSelected, onAdd }: PlayerProps) => {
  return (
    <div>
      {/* card design */}
      <div className="card bg-base-100 w-80 overflow-hidden border border-base-200 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Player Image */}
        <figure className="relative bg-gradient-to-br from-base-200 to-base-300 px-6 pt-6">
          <img
            src={player.icon}
            alt={player.name}
            className="h-52 w-full object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body gap-3 p-5">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{player.name}</h2>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-base-content/60">
              {player.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 rounded-xl bg-base-200 p-3 text-center">
            <div>
              <p className="text-xs text-base-content/60">Category</p>
              <p className="mt-1 text-sm font-semibold">{player.category}</p>
            </div>

            <div className="border-x border-base-300">
              <p className="text-xs text-base-content/60">Rating</p>
              <p className="mt-1 text-sm font-semibold text-warning">⭐ {player.rating}</p>
            </div>

            <div>
              <p className="text-xs text-base-content/60">Level</p>
              <p className="mt-1 text-sm font-semibold">{player.difficulty}</p>
            </div>
          </div>

          <div className="card-actions mt-2">
            <button
              onClick={onAdd}
              disabled={isSelected}
              className="btn btn-neutral w-full rounded-xl text-base"
            >
              {isSelected ? "Added" : "Add To Stack +"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
