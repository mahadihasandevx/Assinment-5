import React from 'react';
import type { Iplayer } from '../../types/playerType';

interface SelectedItem {
  index: number;
  player: Iplayer;
}

interface SelectedStackProps {
  selected: SelectedItem[];
  onRemove: (index: number) => void;
  onRemoveAll: () => void;
}

const SelectedStack = ({ selected, onRemove, onRemoveAll }: SelectedStackProps) => {
  return (
    <div className="bg-base-100 border border-base-200 rounded-xl p-4 w-80 mt-10">
      <h2 className="text-2xl font-bold mb-3">Your Stack</h2>
      <p className="text-md text-gray-600 mb-4">
        {selected.length} Technology Selected
      </p>

      <div className="space-y-3 mb-6">
        {selected.length === 0 ? (
          <p className="text-sm text-gray-400">No technology selected yet.</p>
        ) : (
          selected.map(({ index, player }) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-base-200 p-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={player.icon}
                  alt={player.name}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <p className="text-sm font-semibold">{player.name}</p>
                  <p className="text-xs text-base-content/60">{player.category}</p>
                </div>
              </div>

              <button
                onClick={() => onRemove(index)}
                className="text-gray-400 hover:text-gray-700"
                aria-label={`Remove ${player.name}`}
              >
                ✕
              </button>
            </div>
          ))
        )}
      </div>

      <button
        onClick={onRemoveAll}
        disabled={selected.length === 0}
        className="w-full py-2 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold rounded-lg transition-colors"
      >
        Remove All
      </button>
    </div>
  );
};

export default SelectedStack;
