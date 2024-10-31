import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const SolveLinear = ({ onSuccess }: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ax+b=c*/
    let a = MathHelper.coefficentGenerator(12);
    let b = MathHelper.coefficentGenerator(12);
    let x = MathHelper.coefficentGenerator(12);
    let c = a * x + b;
    let firstSign = b < 0 ? "" : "+";
    const solution = `x=${x}`.replace(/\+\-/g, "-").replace(/\b1x\b/g, "x");
    const newQuestion = `${a}x ${firstSign} ${b} = ${c}`;
    const correctAnswer = solution;
    return {
      hint: `Start by adding/subtracting ${b}`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title="Solve for x"
      onSuccess={onSuccess}
      placeholderUserAnswer="x = ?"
      newQuestion={generateNewQuestion}
    />
  );
};
