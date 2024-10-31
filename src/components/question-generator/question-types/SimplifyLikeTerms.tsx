import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const SimplifyLikeTerms = ({
  onSuccess,
}: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /* ax+by+cx+dy */
    let a = MathHelper.coefficentGenerator(6) + 1;
    let b = MathHelper.coefficentGenerator(6) + 1;
    let c = MathHelper.coefficentGenerator(6) + 1;
    let d = MathHelper.coefficentGenerator(6) + 1;
    let firstSign = b < 0 ? "" : "+";
    let secondSign = c < 0 ? "" : "+";
    let thirdSign = d < 0 ? "" : "+";
    const solution = `${a + c}x+${b + d}y`;
    const newQuestion = MathHelper.RemovePlusMinus(
      MathHelper.Remove1x(
        `${a}x ${firstSign}${b}y ${secondSign}${c}x ${thirdSign}${d}y`
      )
    );
    const correctAnswer = MathHelper.RemovePlusMinus(
      MathHelper.Remove1x(solution)
    );
    return {
      hint: `Start by adding/subtracting ${b}`,
      answers: [correctAnswer],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title="Simplify"
      onSuccess={onSuccess}
      placeholderUserAnswer="?x + ?y"
      newQuestion={generateNewQuestion}
    />
  );
};
