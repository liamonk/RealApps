import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const FactoriseQuadratic = ({
  onSuccess,
}: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /* y = an^2 + bn + c = h(dn + e)i(fn + g) */
    let d = Math.abs(MathHelper.coefficentGenerator(5, true, false));
    let e = MathHelper.coefficentGenerator(6);
    let f = Math.abs(MathHelper.coefficentGenerator(2, true, false));
    let g = MathHelper.coefficentGenerator(6);
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
    } ${bx} ${secondSign} ${c}$`;

    return {
      hint: `... coefficent in first bracket is ${d}`,
      answers: [correctAnswer1, correctAnswer2],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title="Factorise Quadratic"
      onSuccess={onSuccess}
      placeholderUserAnswer="(?n + ?)(?n + ?)"
      newQuestion={generateNewQuestion}
    />
  );
};
