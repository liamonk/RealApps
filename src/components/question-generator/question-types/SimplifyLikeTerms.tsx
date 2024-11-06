import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const SimplifyLikeTerms = ({ onSuccess }: QuestionCardInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /* ax+by+cx+dy */
    let a = MathHelper.coefficentGenerator(6, true, false);
    let b = MathHelper.coefficentGenerator(6, true, false);
    let c = MathHelper.coefficentGenerator(6, true, false);
    let d = MathHelper.coefficentGenerator(6, true, false);
    let firstSign = b < 0 ? "" : "+";
    let secondSign = c < 0 ? "" : "+";
    let thirdSign = d < 0 ? "" : "+";
    const solution = `${a + c}n+${b + d}y`;
    const newQuestion = MathHelper.RemovePlusMinus(
      MathHelper.Remove1x(
        `${a}n ${firstSign}${b}y ${secondSign}${c}n ${thirdSign}${d}y`
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
    <QuestionCard
      title="Simplify"
      onSuccess={onSuccess}
      placeholderUserAnswer="?n + ?y"
      newQuestion={generateNewQuestion}
    />
  );
};
