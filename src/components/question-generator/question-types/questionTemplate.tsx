import { MathHelper } from "../../../mathHelper";
import { QuestionCardRF } from "../QuestionCardRF";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardRFInstanceProps } from "../QuestionCardRF";

export const ComponentName = ({ onSuccess }: QuestionCardRFInstanceProps) => {
  const generateNewQuestion = (): NewQuestionOutput => {
    /*question and answer logic here*/

    const solution = MathHelper.ReformatMathStrings(``);
    const newQuestion = ``;
    const correctAnswer1 = solution;
    return {
      hint: ``,
      answers: [correctAnswer1],
      question: newQuestion,
    };
  };

  return (
    <QuestionCardRF
      title=""
      onSuccess={onSuccess}
      placeholderUserAnswer=""
      newQuestion={generateNewQuestion}
    />
  );
};
