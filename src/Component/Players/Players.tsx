import React, { use, useState } from 'react';
import type { Iplayer } from '../../types/playerType';
import AvailablePlayers from './AvailablePlayers';
import SelectedStack from './SelectedStack';

interface playersProps {
  playersPromise: Promise<Iplayer[]>;
}

const Players = ({ playersPromise }: playersProps) => {
  const players = use(playersPromise);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  const handleAdd = (index: number) => {
    setSelectedIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
  };

  const handleRemove = (index: number) => {
    setSelectedIndexes((prev) => prev.filter((i) => i !== index));
  };

  const handleRemoveAll = () => {
    setSelectedIndexes([]);
  };

  const selected = selectedIndexes.map((index) => ({
    index,
    player: players[index],
  }));

  return (
    <div>
      <div className="flex">
        <div>
          <AvailablePlayers
            players={players}
            selectedIndexes={selectedIndexes}
            onAdd={handleAdd}
          />
        </div>

        <div>
          <SelectedStack
            selected={selected}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Players;
