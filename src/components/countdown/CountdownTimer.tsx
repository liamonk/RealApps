import { useState, useEffect } from "react";
import styled from "styled-components";
import {Button} from "./Button";

const CountdownContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
  background-color: lightGrey;
  border-radius: 30px;
  max-width: 80%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
  min-height: 50px;
  padding: 10px;
`;

const Display = styled.div`
  font-size: 3em;
  margin-left: 100px;
  margin-right: 100px;
`;

function CountdownTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(120); // 2 minutes in seconds

  useEffect(() => {
    let timer : any;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, time]);

  const startStop = () => {
    setIsRunning((prevState) => !prevState);
  };

  const reset = () => {
    setTime(120);
    setIsRunning(false);
  };

  const adjustTime = (amount: number) => {
    setTime((prevTime) => prevTime + amount);
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  };

  return (
    <CountdownContainer>
      <Button
        text={"Reset"}
        backgroundColor={"coral"}
        handleClick={() => reset()}
      ></Button>
      <Button
        text={isRunning ? "Pause" : "Start"}
        backgroundColor={"lightGreen"}
        handleClick={() => startStop()}
      ></Button>
      <Display>{formatTime(time)}</Display>
      <Button
        text={"+30s"}
        backgroundColor={"cornflowerBlue"}
        handleClick={() => adjustTime(30)}
      ></Button>
      <Button
        text={"-30s"}
        backgroundColor={"cornflowerBlue"}
        handleClick={() => (time > 30 ? adjustTime(-30) : {})}
      ></Button>
    </CountdownContainer>
  );
}

export default CountdownTimer;
