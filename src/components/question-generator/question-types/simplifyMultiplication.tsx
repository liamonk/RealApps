import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const SimplifyMultiplication = ({
  onSuccess,
}: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ay^b * cy^d = ey^f*/
    const a = MathHelper.coefficentGenerator(9, true, false);
    const b = MathHelper.coefficentGenerator(5, true, false);
    const c = MathHelper.coefficentGenerator(9, true, false);
    const d = MathHelper.coefficentGenerator(5, true, false);
    const e = a * c;
    const f = b + d;
    const xb = `x^{${b}}`
    const xd = `x^{${d}}`
    const solution = MathHelper.ReformatMathStrings(`${e}x^${f}`);
    const newQuestion = `$${a}${xb} \\times ${c}${xd}$`;
    const correctAnswer1 = solution;
    return {
      hint: `Multiply coefficents add powers`,
      answers: [correctAnswer1],
      question: newQuestion,
    };
  };

  return (
    <QuestionCard
      title="Simplify"
      onSuccess={onSuccess}
      placeholderUserAnswer="?x^?"
      newQuestion={generateNewQuestion}
    />
  );
};
