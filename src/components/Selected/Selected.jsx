import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const Selected = ({choosePlayers, handleDeleteSelectedPlayer, handleNavigate}) => {
    return (
        <div>
            {
                choosePlayers.map((choosePlayer, idx) => <SelectedPlayer 
                handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
                choosePlayer={choosePlayer}
                key={idx}></SelectedPlayer>)
            }
            <button onClick={() => handleNavigate('available')} className='bg-[#E7FE29] font-bold px-6 py-4 rounded-md'>Add More Player</button>
        </div>
    );
};

export default Selected;