import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const FactoriseSingleBracket = ({
  onSuccess,
}: QuestionCardRFInstanceProps) => {
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
    <QuestionCardRF
      title="Factorise Single Bracket"
      onSuccess={onSuccess}
      placeholderUserAnswer="?(x + ?)"
      newQuestion={generateNewQuestion}
    />
  );
};
