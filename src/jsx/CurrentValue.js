
import styled from "styled-components";
function CurrentValue({ score }) {
    const DivScore = styled.div`
   background-color: #dc2f02;
   color:white;
  padding: 10px;
  width: 5vw;
  border-radius: 5px;
`;
    return (
        <DivScore >{score}</DivScore>
    )
}

export default CurrentValue