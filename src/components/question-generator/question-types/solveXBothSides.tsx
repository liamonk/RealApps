import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const SolveXBothSides = ({ onSuccess }: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ax+b=cx + d*/
    let a = MathHelper.coefficentGenerator(8, true, false);
    let b = MathHelper.coefficentGenerator(12, true, false);
    let c = MathHelper.coefficentGenerator(8, true, false);
    let x = MathHelper.coefficentGenerator(12, true, false);
    let d = a * x + b - c * x;
    let firstSign = b < 0 ? "" : "+";
    let secondSign = d < 0 ? "" : "+";
    const solution = MathHelper.ReformatMathStrings(`x = ${x}`);
    const newQuestion = `$${a != 1 ? a : ""}x ${firstSign} ${b} = ${
      c != 1 ? c : ""
    }x ${secondSign} ${d}$`;
    const correctAnswer = solution;
    return {
      hint: `Start by adding/subtracting ${c}x`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCard
      title="Solve"
      onSuccess={onSuccess}
      placeholderUserAnswer="x = ?"
      newQuestion={generateNewQuestion}
    />
  );
};
