import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const SolveXBothSides = ({ onSuccess }: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ax+b=cx + d*/
    let a = MathHelper.coefficentGenerator(8);
    let b = MathHelper.coefficentGenerator(12);
    let c = MathHelper.coefficentGenerator(8);
    let x = MathHelper.coefficentGenerator(12);
    let d = a * x + b - c * x;
    let firstSign = b < 0 ? "" : "+";
    let secondSign = d < 0 ? "" : "+";
    const solution = `x = ${x}`.replace(/\+\-/g, "-").replace(/\b1x\b/g, "x");
    const newQuestion = `${a != 1 ? a : ""}x ${firstSign} ${b} = ${
      c != 1 ? c : ""
    }x ${secondSign} ${d}`;
    const correctAnswer = solution;
    return {
      hint: `Start by adding/subtracting ${c}x`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title="Solve with x on both sides"
      onSuccess={onSuccess}
      placeholderUserAnswer="x = ?"
      newQuestion={generateNewQuestion}
    />
  );
};
