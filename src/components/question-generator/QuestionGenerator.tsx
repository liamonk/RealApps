import React from "react";
import FactoriseQuadratic from "./FactorisingQuadratic";
import { QuestionCardRF } from "./QuestionCardRF";
import { MathHelper } from "../../mathHelper";

export const QuestionGenerator = () => {
  const [count, setCount] = React.useState(0);
  const onUpdateCount = (newCount: number) => {
    setCount(newCount);
  };
  return (
    <>
      <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
      <div style={{ display: "flex" }}>
        <FactoriseQuadratic count={count} onUpdateCount={onUpdateCount} />

        <QuestionCardRF
          title="Adding Integer"
          count={count}
          onUpdateCount={onUpdateCount}
          defaultQuestion="1+1"
          defaultCorrectAnswer={["2"]}
          defaultUserAnswer="?"
          newQuestion={() => {
            const a = MathHelper.coefficentGenerator(10);
            const b = MathHelper.coefficentGenerator(10);
            const newQuestion = `${a} + ${b}`;
            const correctAnswer = a + b;
            return ["Your answer here", [correctAnswer], newQuestion];
          }}
        />

        <QuestionCardRF
          title="Factorising single bracket"
          count={count}
          onUpdateCount={onUpdateCount}
          defaultQuestion="6x+10"
          defaultCorrectAnswer={["2(3x+5)"]}
          defaultUserAnswer="?(?x+?)"
          newQuestion={() => {
            /*a(bx+c) dx+c */
            const a = MathHelper.coefficentGenerator(6) + 1;
            const b = MathHelper.coefficentGenerator(6);
            const c = MathHelper.coefficentGenerator(6);
            const d = a * b;
            const e = a * c;
            const divisor = MathHelper.findHcf(b, c);
            const solution = `${a * divisor}(${b / divisor}x+${c / divisor})`
              .replace(/\+\-/g, "-")
              .replace(/\b1x\b/g, "x");
            const newQuestion = `${d}x ${e >= 0 ? "+" : ""} ${e}`;
            const correctAnswer = solution;
            return ["Your answer here", [correctAnswer], newQuestion];
          }}
        />
      </div>
    </>
  );
};
