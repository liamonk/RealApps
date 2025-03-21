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
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "revert-layer"
       }}>
        <FactoriseQuadratic onSuccess={addToCount} onlyQuestion={false}/>
        <FactoriseSingleBracket onSuccess={addToCount} />
        <SolveXBothSides onSuccess={addToCount} />
        <SolveLinear onSuccess={addToCount} />
        <SimplifyLikeTerms onSuccess={addToCount} />
        <SimplifyMultiplication onSuccess={addToCount} />

        
      </div>
    </>
  );
};
