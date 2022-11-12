
import styled from "styled-components"
function PlayerStats({ score ,name}) {
    const NameDiv = styled.div`
    width: 150px;
    padding: 10px;
    margin-left: auto;
    margin-right:auto;
    background-color: #dc2f02;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border: 2px solid #370617;
    @media all and (max-width:598px) {
    width: 71px;
    padding: 5px;
  }
  `;
    const Nameh4 = styled.h4`
    width: 82px;
    padding: 10px;
    margin-left: auto;
    margin-right:auto;
    color:white;
    background-color: #dc2f02;
    border-radius: 5px;
    @media all and (max-width:598px) {
    width: 71px;
    padding: 5px;
  }
    /* border: 2px solid #370617; */
  `;
    return (
        <div>
            <Nameh4>{name}</Nameh4>
            <NameDiv>{score}</NameDiv>
        </div>
    )
}

export default PlayerStats