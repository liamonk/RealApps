import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const SimplifyMultiplication = ({
  onSuccess,
}: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*ay^b * cy^d = ey^f*/
    const a = MathHelper.coefficentGenerator(9, true, false);
    const b = MathHelper.coefficentGenerator(5, true, false);
    const c = MathHelper.coefficentGenerator(9, true, false);
    const d = MathHelper.coefficentGenerator(5, true, false);
    const e = a * c;
    const f = b * d;

    const solution = MathHelper.ReformatMathStrings(`${e}n^${f}`);
    const newQuestion = `${a}n<sup>${b}</sup> x ${c}n<sup>${d}</sup>`;
    const correctAnswer1 = solution;
    return {
      hint: `Multiply coefficents add powers`,
      answers: [correctAnswer1],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title="Simplify"
      onSuccess={onSuccess}
      placeholderUserAnswer="?n^?"
      newQuestion={generateNewQuestion}
    />
  );
};
