import styled from "styled-components";

const StyledHeader = styled.div`
 
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 10px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Countdown!</h1>
      <br></br>
      <h3>Select your numbers then try to hit the target!</h3>
    </StyledHeader>
  );
};
