import { useEffect } from "react";
import { useState } from "react";
import Player from "../Player/Player";

const Players = ({handleChoosePlayer}) => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('./players.json')
            .then(res => res.json())
            .then(data => setPlayers(data))
    }, [])
    return (
        <div>
            <div className="grid grid-cols-3 gap-8">
                {
                    players.map(player => <Player
                        player={player}
                        handleChoosePlayer={handleChoosePlayer}
                        key={player.playerId}></Player>)
                }
            </div>
        </div>
    );
};

export default Players;