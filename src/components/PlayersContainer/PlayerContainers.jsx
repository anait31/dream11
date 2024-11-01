import Players from "../Players/Players";
import Selected from "../Selected/Selected";
import { useState } from "react";

const PlayerContainers = ({ handleChoosePlayer, choosePlayers, handleDeleteSelectedPlayer }) => {

  const [isActive, setIsActive] = useState({
    status: true
  })

  const handleToggleButton = (status) => {
    if (status === 'available') {
      setIsActive({
        status: true
      })
    }
    else {
      setIsActive({
        status: false
      })
    }
  }

  const handleNavigate = (status) => {
    if (status === 'available') {
      setIsActive({
        status: true
      })
    }
  }

  return (
    <div className="max-w-7xl py-12 mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          {isActive.status ? <h2 className="text-2xl font-bold">Available Players</h2> :
            <h2 className="text-2xl font-bold">Selected Players ({choosePlayers.length}/6)</h2>}
        </div>
        <div>
          <button onClick={() => handleToggleButton('available')} className={`${isActive.status ? 'bg-orange-600 text-white' : ''} px-6 py-3 rounded-md mr-4`}>Available</button>
          <button onClick={() => handleToggleButton('selected')} className={`${isActive.status ? '' : 'bg-orange-600 text-white'} px-6 py-3 rounded-md mr-4`}>Selected ({choosePlayers.length})</button>
        </div>
      </div>
      {isActive.status ? <Players
        handleChoosePlayer={handleChoosePlayer}></Players> : <Selected
          handleNavigate={handleNavigate}
          handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
          choosePlayers={choosePlayers}></Selected>}
    </div>
  );
};

export default PlayerContainers;