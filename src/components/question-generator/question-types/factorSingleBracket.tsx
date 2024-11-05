import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const FactoriseSingleBracket = ({
  onSuccess,
}: QuestionCardRFInstanceProps) => {
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
      `${a * divisor}(${b / divisor}n+${c / divisor})`
    );
    const newQuestion = `${d}n ${e >= 0 ? "+" : ""} ${e}`;
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
      placeholderUserAnswer="?(n + ?)"
      newQuestion={generateNewQuestion}
    />
  );
};
