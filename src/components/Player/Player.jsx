import { FaUserTie } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const Player = ({ player, handleChoosePlayer }) => {
    const { name, country, image, role, battingType, bowlingType, biddingPrice } = player;
    return (
        <div className="border-2 p-6 rounded-md space-y-3">
            <img className="h-[250px] object-cover w-full rounded-md" src={image} alt="" />
            <div className="flex items-center text-2xl font-bold">
                <FaUserTie />
                <h2 className="ml-3">{name}</h2>
            </div>
            <div className="space-y-3">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <IoFlag></IoFlag>
                        <p className="ml-3">{country}</p>
                    </div>
                    <p className="bg-slate-100 px-3 py-2 rounded-md">{role}</p>
                </div>
                <hr />
                <h3>Rating</h3>
                <div className="flex justify-between">
                    <h4>{battingType}</h4>
                    <h4>{bowlingType}</h4>
                </div>
                <div className="flex items-center justify-between">
                    <p>Price: {biddingPrice}</p>
                    <button onClick={() => handleChoosePlayer(player)} className=" border-2 px-3 py-2 rounded-md">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

export default Player;