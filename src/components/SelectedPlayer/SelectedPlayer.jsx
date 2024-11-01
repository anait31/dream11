import { MdDeleteForever } from "react-icons/md";
const SelectedPlayer = ({ choosePlayer, handleDeleteSelectedPlayer }) => {
    const { playerId, image, name, battingType, } = choosePlayer;
    return (
        <div>
            <div className="flex items-center justify-between border-2 p-4 rounded-md mb-3">
                <div className="flex items-center space-x-4">
                    <img className="w-24 rounded-md" src={image} alt="" />
                    <div>
                        <h3 className="text-2xl font-bold">{name}</h3>
                        <p>{battingType}</p>
                    </div>
                </div>
                <button onClick={() => handleDeleteSelectedPlayer(playerId)} className="text-4xl text-red-700">
                    <MdDeleteForever></MdDeleteForever>
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayer;