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
    (180 - parseFloat(angle_A) - parseFloat(angle_B)).toFixed(2)
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

  const [warning, updateWarning] = React.useState("");

  React.useEffect(() => {
    updateWarning(
      parseFloat(measures.angle_A) +
        parseFloat(measures.angle_B) +
        parseFloat(measures.angle_C) >
        180
        ? "Angles exceed 180 degrees - it's probably just my lazy rounding though"
        : ""
    ),  
      [measures];
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

      <h2>Triangle angle calculator</h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Side a</h3>
        <StyledTextArea
          value={measures?.side_a}
          onChange={(e) => {
            const new_side_a = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, side_a: new_side_a });

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
          onChange={(e) => {
            const new_side_b = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, side_b: new_side_b });

            if (measures && new_side_b) {
              const { side_c, side_a } = measures;
              const newMeasures: Measures = {
                side_a,
                side_b: new_side_b,
                side_c,
                ...getAngles(side_a, new_side_b, side_c),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
        <h3>Side c</h3>
        <StyledTextArea
          value={measures?.side_c}
          onChange={(e) => {
            const new_side_c = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, side_c: new_side_c });

            if (measures && new_side_c) {
              const { side_a, side_b } = measures;
              const newMeasures: Measures = {
                side_a,
                side_b,
                side_c: new_side_c,
                ...getAngles(side_a, side_b, new_side_c),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3>Angle A</h3>
        <StyledTextArea
          value={measures?.angle_A}
          onChange={(e) => {
            const new_angle_A = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, angle_A: new_angle_A });

            if (measures && new_angle_A) {
              const { side_b, side_c } = measures;
              const new_side = MathHelper.CosineRuleSides(
                parseFloat(side_b),
                parseFloat(side_c),
                parseFloat(new_angle_A)
              );
              const newMeasures: Measures = {
                side_b,
                side_c,
                angle_A: new_angle_A,
                side_a: String(new_side),
                angle_B: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_c),
                    parseFloat(side_b)
                  )
                ),
                angle_C: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_b),
                    parseFloat(side_c)
                  )
                ),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
        <h3>Angle B </h3>
        <StyledTextArea
          value={measures?.angle_B}
          onChange={(e) => {
            const new_angle_B = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, angle_A: new_angle_B });

            if (measures && new_angle_B) {
              const { side_a, side_c } = measures;
              const new_side = MathHelper.CosineRuleSides(
                parseFloat(side_a),
                parseFloat(side_c),
                parseFloat(new_angle_B)
              );
              const newMeasures: Measures = {
                side_a,
                side_c,
                angle_B: new_angle_B,
                side_b: String(new_side),
                angle_A: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_c),
                    parseFloat(side_a)
                  )
                ),
                angle_C: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_a),
                    parseFloat(side_c)
                  )
                ),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
        <h3>Angle C</h3>
        <StyledTextArea
          value={measures?.angle_C}
          onChange={(e) => {
            const new_angle_C = e.target.value;
            //get other two sides
            updateMeasures({ ...measures, angle_A: new_angle_C });

            if (measures && new_angle_C) {
              const { side_b, side_a } = measures;
              const new_side = MathHelper.CosineRuleSides(
                parseFloat(side_b),
                parseFloat(side_a),
                parseFloat(new_angle_C)
              );
              const newMeasures: Measures = {
                side_b,
                side_a,
                angle_C: new_angle_C,
                side_c: String(new_side),
                angle_B: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_a),
                    parseFloat(side_b)
                  )
                ),
                angle_A: String(
                  MathHelper.cosineRuleAngles(
                    new_side,
                    parseFloat(side_b),
                    parseFloat(side_a)
                  )
                ),
              };
              updateMeasures(newMeasures);
            }
          }}
        ></StyledTextArea>
      </div>
      <div style={{ marginTop: '20px' }}>{warning}</div>
    </>
  );
};
