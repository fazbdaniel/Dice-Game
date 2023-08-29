import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dices"/>
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
max-width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.content {
  text-align: center;
  h1 {
    font-size: 48px;
    white-space: nowrap;
    margin-bottom: 20px;
  }
}
`;
