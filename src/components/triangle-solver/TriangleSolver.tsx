import React from "react";
import styled from "styled-components";
import { MathHelper } from "../../mathHelper";

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

type Measures = {
  side_a: string;
  side_b: string;
  side_c: string;
  angle_A: string;
  angle_B: string;
  angle_C: string;
};

const getAngles = (side_a: string, side_b: string, side_c: string) => {
  const _side_c = parseFloat(side_c);
  const _side_b = parseFloat(side_b);
  const _side_a = parseFloat(side_a);
  const angle_A = String(
    MathHelper.cosineRuleAngles(_side_c, _side_b, _side_a)
  );
  const angle_B = String(
    MathHelper.cosineRuleAngles(_side_c, _side_a, _side_b)
  );
  const angle_C = String(
    MathHelper.cosineRuleAngles(_side_a, _side_b, _side_c)
  );
  return { angle_A, angle_B, angle_C };
};

export const TriangleSolver = () => {
  const [measures, updateMeasures] = React.useState<Measures>({
    side_a: "100",
    side_b: "100",
    side_c: "141.421356237",
    angle_A: "45",
    angle_B: "45",
    angle_C: "90",
  });

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
        <h3>Side a</h3>
        <StyledTextArea
          value={measures?.side_a}
          onChange={(e) => {
            const new_side_a = e.target.value;
            //get other two sides
            updateMeasures({...measures, side_a: new_side_a});
            console.log(new_side_a);
            if (measures && new_side_a) {
              const { side_c, side_b } = measures;
              const newMeasures: Measures = {
                side_a: new_side_a,
                side_b,
                side_c,
                ...getAngles(new_side_a, side_b, side_c),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
        <h3>Side b</h3>
        <StyledTextArea
          value={measures?.side_b}
          onChange={() => {}}
        ></StyledTextArea>
        <h3>Side c</h3>
        <StyledTextArea
          value={measures?.side_c}
          onChange={() => {}}
        ></StyledTextArea>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Angle a</h3>
        <StyledTextArea
          value={measures?.angle_A}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
        <h3>Angle B </h3>
        <StyledTextArea
          value={measures?.angle_B}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
        <h3>Angle C</h3>
        <StyledTextArea
          value={measures?.angle_B}
          style={{ backgroundColor: "lightGrey" }}
        ></StyledTextArea>
      </div>
    </>
  );
};
