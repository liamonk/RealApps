import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const FactoriseSingleBracket = ({
  onSuccess,
}: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
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
    return {
      hint: `... HCF is ${a}`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCard
      title="Factorise Single Bracket"
      onSuccess={onSuccess}
      placeholderUserAnswer="?(x + ?)"
      newQuestion={generateNewQuestion}
    />
  );
};
