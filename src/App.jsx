
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PlayerContainers from './components/PlayersContainer/PlayerContainers'
import Subscribe from './components/Subscribe/Subscribe'
import { toast, ToastContainer } from 'react-toastify';

function App() {
  const [freeCredit, setFreeCredit] = useState(0);
  const [choosePlayers, setChoosePlayer] = useState([]);
  const notifySuccess = () => {
    toast.success("Your credit added successfully!", {
      position: "top-center"
    })
  };

  const notifyPlayerSuccess = (name) => {
    toast.success(`${name} added successfully!`, {
      position: "top-center"
    })
  };

  const notifyError = () => {
    toast.error("Not enough money to buy this player, Please claim some credit!", {
      position: "top-center"
    })
  };

  const notifyMatched = (name) => {
    toast.error(`${name} Already in you team!`, {
      position: "top-center"
    })
  };

  const notifyLimit = () => {
    toast.error("Your team is full!", {
      position: "top-center"
    })
  };

  const notifyRemovePlayer = (name) => {
    toast.error(`${name} Removed Successfully`, {
      position: "top-center"
    })
  };

  const handleFreeCredit = () => {
    const newCredit = freeCredit + 50000000;
    setFreeCredit(newCredit)
    notifySuccess()
  }

  const handleChoosePlayer = (player) => {
    if (freeCredit < player.biddingPrice) {
      notifyError()
    }

    else if (choosePlayers.length === 6) {
      notifyLimit()
    }
    else {
      const mactchedPLayer = choosePlayers.find(currentPlayer => currentPlayer.playerId === player.playerId);

      if (mactchedPLayer) {
        notifyMatched(player.name)
      }
      else {
        setChoosePlayer([...choosePlayers, player]);
        const remainingCredit = (freeCredit - player.biddingPrice);
        setFreeCredit(remainingCredit);
        notifyPlayerSuccess(player.name)
      }
    }
  }

  const handleDeleteSelectedPlayer = (id) => {
    const deletePlayer = choosePlayers.find(choosePlayer => choosePlayer.playerId === id);
    const remainingPlayers = choosePlayers.filter(remainingPLayer => remainingPLayer !== deletePlayer)
    setChoosePlayer(remainingPlayers);
    const remaingCredit = (freeCredit + deletePlayer.biddingPrice);
    setFreeCredit(remaingCredit);
    notifyRemovePlayer(deletePlayer.name)
  }
  return (
    <>
      <Header freeCredit={freeCredit}></Header>
      <ToastContainer></ToastContainer>
      <Hero handleFreeCredit={handleFreeCredit}></Hero>
      <div>
        <PlayerContainers
          choosePlayers={choosePlayers}
          handleDeleteSelectedPlayer={handleDeleteSelectedPlayer}
          handleChoosePlayer={handleChoosePlayer}></PlayerContainers>
      </div>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  )
}

export default App
