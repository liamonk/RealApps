import React from "react";
import { Card } from "./Card";
import styled from "styled-components";
import { Button } from "./Button";
import CountdownTimer from "./CountdownTimer";

/*
interface CardData{
  id: string;
  value: number;
}
  */

interface ToggleProps {
  onClick: () => void;
  isActive: boolean;
  children: React.ReactNode;
}

interface SliderProps {
  isActive: boolean;
}

const StyledGameArea = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 50px;
  height: 100px;
  margin-bottom: 20px;
`;

const StyledCardArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 50px;
  min-height: 90px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  overflow: auto;
`;

const Toggle = styled.button<ToggleProps>`
  background-color: ${(props) => (props.isActive ? "lightPink" : "lightBlue")};
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  position: relative;
  height: 20px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Slider = styled.span<SliderProps>`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  top: 50%;
  left: ${(props) => (props.isActive ? "75%" : "25%")};
  transform: translate(-50%, -50%);
  transition: left 0.3s;
`;

const ToggleContainer = styled.div`
  font-size: 25px;
  display: flex;
  background-color: lightGrey;
  border-radius: 5px;
  max-height: 50px;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Game = () => {
  const [cardDigits, updateCardDigits] = React.useState<number[]>([]);
  const [target, updateTarget] = React.useState(0);
  const [threeDigitTarget, updateThreeDigitTarget] = React.useState(false);
  const cardElements = cardDigits.map((card: any) => {
    return <Card key={card.id} value={card} />;
  });

  const newOneDigitNumber = () => {
    const newDigit = Math.floor(Math.random() * 9 + 1);
    const newDigits: number[] = [...cardDigits, newDigit];
    updateCardDigits(newDigits);
  };

  const newTwoDigitNumber = () => {
    function newMultiple25() {
      const newDigit = Math.floor(Math.random() * 4);
      switch (newDigit) {
        case 0:
          return 25;
        case 1:
          return 50;
        case 2:
          return 75;
        case 3:
          return 100;
        default:
          return 50;
      }
      return newDigit;
    }
    const newDigit = newMultiple25();
    const newDigits = [...cardDigits, newDigit];
    updateCardDigits(newDigits);
  };

  const newTarget = () => {
    const newTargetNumber = Math.floor(
      threeDigitTarget ? Math.random() * 899 + 100 : Math.random() * 89 + 10
    );
    const sortedArrayOfDigits = cardDigits.sort((a, b) => a - b);
    updateTarget(newTargetNumber);
    updateCardDigits(sortedArrayOfDigits);
  };

  const handleTargetToggle = () => {
    updateThreeDigitTarget(!threeDigitTarget);
  };

  const resetGame = () => {
    updateTarget(0);
    updateCardDigits([]);
  };
  return (
    <>
      <StyledGameArea>
        <Button
          text={"Small"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newOneDigitNumber();
          }}
        ></Button>
        <Button
          text={"Big"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newTwoDigitNumber();
          }}
        ></Button>
        <Button
          text={"Set Target"}
          backgroundColor={"lightGreen"}
          handleClick={() => {
            newTarget();
          }}
        ></Button>
        <ToggleContainer>
          <p style={{ paddingRight: "20px" }}>Target Digits: </p>
          <p style={{ paddingRight: "5px" }}>2</p>
          <Toggle onClick={handleTargetToggle} isActive={threeDigitTarget}>
            <Slider isActive={threeDigitTarget}></Slider>
          </Toggle>
          <p style={{ paddingLeft: "5px" }}>3</p>
        </ToggleContainer>
        <Button
          text={"Reset Game"}
          backgroundColor={"coral"}
          handleClick={() => {
            resetGame();
          }}
        ></Button>
      </StyledGameArea>
      <StyledCardArea>{cardElements}</StyledCardArea>
      <StyledGameArea>Target: {target}</StyledGameArea>
      <CountdownTimer />
    </>
  );
};
