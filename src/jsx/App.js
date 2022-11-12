import React, { useState } from "react";
import "./App.css";
import RollDice from "./RollDice";
import CurrentValue from "./CurrentValue";
import PlayerStats from "./PlayerStats";

import CheckWinner from "./CheckWinner";

import LandPage from "./LandPage";
import styled from "styled-components";


const Btn = styled.button`
  width: 150px;
  padding: 10px;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 16px;
  background-color: #dc2f02;
  border-radius: 5px;
  border: 2px solid #370617;
  cursor: pointer;
  @media all and (max-width:598px) {
    width: 99px;
  }
`;
const DivGame = styled.div`
  width: 300px;
  height: 80vh;
  background-color: #202020;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 3em;
  @media all and (max-width:850px) {
    width: 33vw;
    height: 76vh;
    flex-direction: column;
  }
  @media all and (max-width:598px) {
    width: 33vw;
    height: 76vh;
    flex-direction: column;
  }
  `;
const DivPlayer = styled.div`
   width: 20vw;
   height: 20vh;
   
   border-radius: 2em;
  background-color: #333533;
  @media all and (max-width:850px) {
    width: 31vw;
    height: 20vh;
  }
  /* background: url("/public/images/dices.jpg"); */
  
  /* border-radius: 5px; */
`;
const DivGameContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-color: #03071e; */
`;


function App() {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(5);
  const [activePlayer, setActivePlayer] = useState("Player One");
  const [modal, setModal] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [current, setCurrent] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [gameInfo, setGameInfo] = useState({
    PlayerOne: "Player One",
    PlayerTwo: "Player Two",
    gameOver: false,
    isDisabled: false,
    msg1:'Player One wins',
    msg2:'Player Two wins',
  });
  const LandingPage = () => {
    setIsLandingPage((prevLand) => !prevLand);
  };
  const isWinner = () => {
    if (playerOneScore > 100 ) {
      isWinText()
      setGameInfo((prevGame) => {
        return {
          ...prevGame,
          gameOver: true,
          isDisabled: true,
          PlayerOne:'You Lost',
          PlayerTwo:'You Win',
          
        };
      });
      return (

        <h4> player Two wins</h4>
      )
      
 
    }
    if (playerOneScore === 100) {
      <h4> player one wins</h4>;
      setGameInfo((prevGame) => {
        return {
          ...prevGame,
          gameOver: true,
          isDisabled: true,
          PlayerOne:'You Win',
          PlayerTwo:'You Lose',
        };
      });
      
    }

    if (playerTwoScore > 100) {
      setGameInfo((prevGame) => {
        return {
          ...prevGame,
          gameOver: true,
          isDisabled: true,
          PlayerOne:'You Win',
          PlayerTwo:'You Lose',
        };
      });
      return <h4> player one wins</h4>;
    } else if (playerTwoScore === 100) {
      setGameInfo((prevGame) => {
        return {
          ...prevGame,
          gameOver: true,
          isDisabled: true,
          PlayerOne:'You Lose',
          PlayerTwo:'You Win',
        };
      });
      return <h4> player two wins</h4>;
    }
  };

  function isWinText() {
    if (playerOneScore > 100) {
      return <h4> player Two wins</h4>;
  }else if (playerOneScore === 100){
    return <h4> player One wins</h4>;
  }
  }
  const resetGame=()=> {
    window.location ="/"
  }
  
  function getRandomDice() {
    if (!gameInfo.gameOver) {
      let Dice1 = Math.floor(Math.random() * 6) + 1;
      setDice1(Dice1);
      let Dice2 = Math.floor(Math.random() * 6) + 1;
      setDice2(Dice2);
      setCurrent(current + Dice1 + Dice2);
    }
  }

  function isPlayerTurn() {
    if (!gameInfo.gameOver) {
      if (current !== 0) {
        if (activePlayer === "Player One") {
          setActivePlayer("Player Two");
          setPlayerOneScore((prevScore) => prevScore + current);
        } else if (activePlayer === "Player Two") {
          setActivePlayer("Player One");
          setPlayerTwoScore((prevScore) => prevScore + current);
        }
        setCurrent(0);
      }
    }
  }

  
  return (
    <div>
      {isLandingPage && <LandPage pageLanding={LandingPage} btnName />}
      {!isLandingPage && (
        <div className="App">
          
            <h1>DiceGame </h1>
          <DivGameContainer >
            <DivPlayer >
              <PlayerStats name={gameInfo.PlayerOne} score={playerOneScore} />
            </DivPlayer>
            <DivGame >
            <CurrentValue score={current} />
              <RollDice dice1={dice1} dice2={dice2} />
              

              <Btn onClick={getRandomDice}>Roll dice 🎲</Btn>
              <Btn
                onClick={() => {
                  isPlayerTurn();
                  isWinner();
                }}
              >
                Hold 🥊
              </Btn>
                <Btn onClick={resetGame}>Reset</Btn>
              <CheckWinner
                setGameInfo={setGameInfo}
                gameinfo={gameInfo.gameOver}
                winner={isWinner}
                isWin={isWinText}
                player1Score={playerOneScore}
                player2Score={playerTwoScore}
                score={current}
                activePlayer={activePlayer}
              />
            </DivGame>
            <DivPlayer >
              <PlayerStats name={gameInfo.PlayerTwo} score={playerTwoScore} />
            </DivPlayer>
          </DivGameContainer>
        </div>
      )}
    </div>
  );
}

export default App;
