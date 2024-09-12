import styled from "styled-components";

export const Button = (props: any) => {
  const StyledButton = styled.button`
    font-size: 30px;
    max-height: 50px;
    background-color: ${props.backgroundColor};
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    min-width: 100px;
  `;

  return <StyledButton onClick={props.handleClick}>{props.text}</StyledButton>;
};
