import React from "react";
import { FactoriseQuadratic } from "./question-types/factoriseQuadratic";
import { FactoriseSingleBracket } from "./question-types/factorSingleBracket";
import { SolveXBothSides } from "./question-types/solveXBothSides";
import { SolveLinear } from "./question-types/solveLinear";
import { SimplifyLikeTerms } from "./question-types/SimplifyLikeTerms";
import { SimplifyMultiplication } from "./question-types/simplifyMultiplication";

export interface NewQuestionOutput {
  hint: string;
  answers: string[];
  question: string;
}

export const QuestionGenerator = () => {
  const [count, setCount] = React.useState(
    Number(localStorage.getItem("count"))
  );

  const addToCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem("count", String(newCount));
  };

  return (
    <>
      <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <FactoriseQuadratic onSuccess={addToCount} />
        <FactoriseSingleBracket onSuccess={addToCount} />
        <SolveXBothSides onSuccess={addToCount} />
        <SolveLinear onSuccess={addToCount} />
        <SimplifyLikeTerms onSuccess={addToCount} />
        <SimplifyMultiplication onSuccess={addToCount} />

        {/* <QuestionCardRF
          title="Adding Integer"
          onUpdateCount={addToCount}
          defaultQuestion="1+1"
          defaultCorrectAnswer={["2"]}
          defaultUserAnswers="?"
          newQuestion={() => {
            const a = MathHelper.coefficentGenerator(10);
            const b = MathHelper.coefficentGenerator(10);
            const newQuestion = `${a} + ${b}`;
            const correctAnswer = a + b;
            return [`... You can do it!`, [correctAnswer], newQuestion];
          }}
        />

        <QuestionCardRF
          title="Factorising single bracket"
          onUpdateCount={addToCount}
          defaultQuestion="6x+10"
          defaultCorrectAnswer={["2(3x+5)"]}
          defaultUserAnswers="?(?x+?)"
          newQuestion={() => {
            
            const a = Math.abs(MathHelper.coefficentGenerator(6) + 1);
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
            return [`... HCF is ${a}`, [correctAnswer], newQuestion];
          }}
        /> */}
      </div>
    </>
  );
};
