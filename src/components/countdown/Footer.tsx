import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: lightYellow;
  max-height: 50px;
  align-items: center;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>PiAndSeek@gmail.com</p>
    </StyledFooter>
  );
};
