import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
  width: 4em;
  padding: 10px;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 16px;
  background-color: #dc2f02;
  border-radius: 5px;
  border: 2px solid #370617;
  /* margin-top: 4em; */
  margin-left: 55em;
  margin-right: auto;
  @media all and (max-width:1308px) {
    width: 99px;
    margin-left: auto;
  }
  @media all and (max-width:598px) {
    width: 99px;
    margin-left: 0;
  }
`;
const Div = styled.div`
width: 40em;
color: white;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  font-size: 20px;
  background-color: #dc2f02;
  border-radius: 5px;
  border: 2px solid #370617;
 
`;
const H4Div = styled.h4`
width: 20em;
color: white;
  margin-top: 4em;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Indie Flower', cursive;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  background-color: #dc2f02;
  border-radius: 5px;
  border: 2px solid #370617;
 
`;

function LandPage({pageLanding,inputNum}) {
    
  return (
    <div>
    <Div>
    <ul>
    Game Instructions

       <li>In your turn - roll the dice lat least once and accumulate the result in "current"</li> 
       <li>You can roll again or click "Hold" to save the points from "Current" and end the turn.</li> 
       <li>Note If you get 6-6 - you will lose all points from "current" and the turn will go to your opponent.</li> 
       <li>4.. Each player “flops”, or rolls, one die to determine who goes first. The highest number wins.</li> 
       <li>If you managed to reach exactly the target score - you win! if you passed it you loose</li> 
    </ul>

   
    </Div>
    <H4Div>Please Select a Target Score</H4Div>
    <div>

    </div>
  
    {/* <LandPageInputandStart land2={land} landing2={landing3} btnName="Start Game"></LandPageInputandStart> */}
    <div>
        {/* <input onChange={inputNum} type='number' min='50'></input> */}
        
    </div>
    <div>
    <Btn onClick={pageLanding}  >Start Game</Btn>
    </div>
   
   
    </div>
  )
}

export default LandPage