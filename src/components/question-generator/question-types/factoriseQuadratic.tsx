import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";
import Latex from "react-latex-next";
import { useState } from "react";

export const FactoriseQuadratic = ({
  onSuccess,
  onlyQuestion,
  showAnswers,
}: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /* y = an^2 + bn + c = h(dn + e)i(fn + g) */
    let d = Math.abs(MathHelper.coefficentGenerator(5, true, false));
    let e = MathHelper.coefficentGenerator(6, true, false);
    let f = Math.abs(MathHelper.coefficentGenerator(2, true, false));
    let g = MathHelper.coefficentGenerator(6, true, false);
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let h = 1;
    let i = 1;
    let firstBracketHCF = MathHelper.findHcf(d, e);
    let secondBracketHCF = MathHelper.findHcf(f, g);
    if (firstBracketHCF != 1) {
      h = firstBracketHCF;
    }
    if (secondBracketHCF != 1) {
      i = secondBracketHCF;
    }
    let firstSign = "";
    if (b >= 0) {
      firstSign = "+";
    } else {
      firstSign = "";
    }
    let secondSign = "";
    if (c >= 0) {
      secondSign = "+";
    } else {
      secondSign = "";
    }
    let correctAnswer1 = MathHelper.ReformatMathStrings(
      `${h != 1 ? h : ""}${i != 1 ? i : ""}(${d / h}x+${e / h})(${f / i}x+${
        g / i
      })`
    );
    let correctAnswer2 = MathHelper.ReformatMathStrings(
      `${h != 1 ? h : ""}${i != 1 ? i : ""}(${f / i}x+${g / i})(${d / h}x+${
        e / h
      })`
    );

    const ax2 = a == 1 ? "x^{2}" : `${a}x^{2}`;
    let bx = "";
    if (b == 0) {
      bx = "";
    } else if (b == 1) {
      bx = "x";
    } else if (b == -1) {
      bx = "-x";
    } else {
      bx = `${b}x`;
    }

    const newQuestion = `$${ax2} ${
      bx === "" ? "" : firstSign
    } ${bx} ${secondSign} ${c} $`;

    return {
      hint: `... coefficent in first bracket is ${d}`,
      answers: [correctAnswer1, "=", correctAnswer2],
      question: newQuestion,
    };
  };

  const [data, setData] = useState(generateNewQuestion())
  if (onlyQuestion) {
    return (
      <>
        <div id="question" style={{ width: "240px" }}>
          {<Latex>{data.question}</Latex>}
        </div>
        <div id="answer" style={{ color: showAnswers ? "black" : "white" }}>
          {data.answers}
        </div>
      </>
    );
  }

  return (
    <QuestionCard
      title="Factorise Quadratic"
      onSuccess={onSuccess}
      placeholderUserAnswer="(?x + ?)(?x + ?)"
      newQuestion={generateNewQuestion}
    />
  );
};
