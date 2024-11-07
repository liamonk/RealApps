import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const FactoriseSingleBracket = ({
  onSuccess,
}: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    const a = Math.abs(MathHelper.coefficentGenerator(6, true, false));
    const b = MathHelper.coefficentGenerator(6, true, false);
    const c = MathHelper.coefficentGenerator(6, true, false);
    const d = a * b;
    const e = a * c;
    let divisor = MathHelper.findHcf(b, c);
    if (b < 0 && c < 0) {
      divisor = divisor * -1;
    }
    const solution = MathHelper.ReformatMathStrings(
      `${a * divisor}(${b / divisor}x+${c / divisor})`
    );
    const newQuestion = `$${d}x ${e >= 0 ? "+" : ""} ${e}$`;
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
