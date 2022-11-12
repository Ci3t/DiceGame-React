
function RollDice({ dice1, dice2 }) {
  
    return (

        <div className='dice-images'>
            <img src={`/images/dice-${dice1}.png` || 1} alt="" width="100px"></img>
           
            <img src={`/images/dice-${dice2}.png` || 4} alt="" width="100px"></img>

       
        </div>
    )

}



export default RollDice;