import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "/src/assets/logo.png";

const StyledHeaderMain = styled.div`
  background-color: #b0e1ff;
  padding: 10px;
  margin-bottom: 20px;
  box-shadow: 5px 5px lightgrey;
  display: flex;
  margin-left: auto
`;

const StyledNavButton = styled.li`
display: block;
margin-left: 50px;
a {
    text-decoration: none;
    color: black;
  }
background-color: pink;
border-radius: 5px;
padding-left: 20px;
padding-right: 20px;
`

const StyledNavArea = styled.ul`
  list-style-type: none;
  padding-left: 20px;
  display: flex;
  justify-content: space-around;
  margin-left:auto;
`

const StyledImage = styled.img`
  height: 70px;
  margin-left: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

export const Header =()=> {
  return (
    <StyledHeaderMain>
      <h1>Real Apps</h1>
      <StyledNavArea>
        
          <StyledNavButton><Link to="/countdown"><p>Countdown</p></Link></StyledNavButton>
          <StyledNavButton><Link to="/piandseek"><p>PiAndSeek</p></Link></StyledNavButton>
        
        </StyledNavArea>  
      <StyledImage src={logo} />      
    </StyledHeaderMain>
  );
}
