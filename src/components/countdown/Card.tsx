import styled from "styled-components";

const StyledCard = styled.div`
  background-color: lightBlue;
  padding: 5px;
  width: 80px;
  text-align: center;
  margin: 10px;
  font-size: 50px;
  border-radius: 5px;
`;

export const Card = (props: any) => {
  return <StyledCard>{props.value}</StyledCard>;
};
