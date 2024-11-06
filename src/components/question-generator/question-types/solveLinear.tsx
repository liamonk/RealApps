import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const SolveLinear = ({ onSuccess }: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ax+b=c*/
    let a = MathHelper.coefficentGenerator(12, true, false);
    let b = MathHelper.coefficentGenerator(12, true, false);
    let x = MathHelper.coefficentGenerator(12, true, false);
    let c = a * x + b;
    let firstSign = b < 0 ? "" : "+";
    const solution = MathHelper.ReformatMathStrings(`n=${x}`);
    const newQuestion = `${a}n ${firstSign} ${b} = ${c}`;
    const correctAnswer = solution;
    return {
      hint: `Start by adding/subtracting ${b}`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCard
      title="Solve for n"
      onSuccess={onSuccess}
      placeholderUserAnswer="n = ?"
      newQuestion={generateNewQuestion}
    />
  );
};
