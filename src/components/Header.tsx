import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/src/assets/logo.png";

const StyledHeaderMain = styled.div`
  background-color: #b0e1ff;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 5px 5px lightgrey;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledNavButton = styled.li`
  display: block;
  margin-left: 50px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 600;
  a {
    text-decoration: none;
    color: black;
  }
  background-color: pink;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
`;

const StyledNavArea = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  margin-left: auto;
  flex-wrap: wrap;
`;

const StyledImage = styled.img`
  height: 70px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Header = () => {
  return (
    <StyledHeaderMain>
      <h1>Pi & Seek!</h1>
      <StyledNavArea>
        <StyledNavButton>
          <Link to="home">
            <p>Home</p>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link to="question-generator">
            <p>Question Generator</p>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link to="triangle-solver">
            <p>Triangle Solver</p>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link to="random-groups">
            <p>Random Groups</p>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link to="countdown">
            <p>Countdown</p>
          </Link>
        </StyledNavButton>
        <StyledNavButton>
          <Link to="ncea">
            <p>NCEA</p>
          </Link>
        </StyledNavButton>
      </StyledNavArea>
      <StyledImage src={logo} />
    </StyledHeaderMain>
  );
};
