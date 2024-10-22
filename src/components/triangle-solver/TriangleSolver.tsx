import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 50%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: centre;
  font-size: 30px;
  max-width: 300px;
  color: AC5293;
`;

export const TriangleSolver = () => {
  const [knownValues, updateKnownValues] = React.useState([3, 4, 90]);
  const [calculatedValues, updateCalculatedValues] = React.useState([
    2.65, 36.87, 53.13,
  ]);

  const cosineRuleSides = (b: number, c: number, A: number) => {
    return Number(
      Math.sqrt(
        b * b + c * c - 2 * b * c * Math.cos(A * (Math.PI / 180))
      ).toFixed(2)
    );
  };

  const cosineRuleAngles = (a: number, b: number, c: number) => {
    return Number(
      (
        Math.acos((a * a + b * b - c * c) / (2 * a * b)) *
        (180 / Math.PI)
      ).toFixed(2)
    );
  };

  const handleCosineRuleSidesKnownValuesChange = (index: number) => (event: any) => {
    const updatedKnownValues = [...knownValues];
    updatedKnownValues[index] = event.target.value;
    updateKnownValues(updatedKnownValues);
    const updatedCalculatedValues = [...calculatedValues];
    updatedCalculatedValues[0] = cosineRuleSides(
      updatedKnownValues[0],
      updatedKnownValues[1],
      updatedKnownValues[2]
    );
    updatedCalculatedValues[1] = cosineRuleAngles(
      updatedKnownValues[0],
      updatedCalculatedValues[0],
      updatedKnownValues[1]
    );
    updatedCalculatedValues[2] = cosineRuleAngles(
      updatedKnownValues[1],
      updatedCalculatedValues[0],
      updatedKnownValues[0]
    );
    updateCalculatedValues(updatedCalculatedValues);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "25px",
        }}
      >
        <h1>Triangle Solver</h1>
        <h4>
          Enter known sides and angles, the rest will be calculated! no units
          required
        </h4>
      </div>

      <h2>Cosine Rule Calculator (Side angle side)</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Known Side 1</h3>
        <StyledTextArea
          value={knownValues[0]}
          onChange={handleCosineRuleSidesKnownValuesChange(0)}
        ></StyledTextArea>
        <h3>Known Angle</h3>
        <StyledTextArea
          value={knownValues[2]}
          onChange={handleCosineRuleSidesKnownValuesChange(2)}
        ></StyledTextArea>
        <h3>Known Side 2</h3>
        <StyledTextArea
          value={knownValues[1]}
          onChange={handleCosineRuleSidesKnownValuesChange(1)}
        ></StyledTextArea>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        
        <h3>Missing Angle 1</h3>
        <StyledTextArea
          value={calculatedValues[1]}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
        <h3>Missing Side </h3>
        <StyledTextArea
          value={calculatedValues[0]}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
        <h3>Missing Angle 2</h3>
        <StyledTextArea
          value={calculatedValues[2]}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
      </div>
    </>
  );
};
