import { MathHelper } from "../../../mathHelper";
import { QuestionCard } from "../QuestionCard";
import { NewQuestionOutput } from "../QuestionGenerator";
import { QuestionCardInstanceProps } from "../QuestionCard";

export const ComponentName = ({ onSuccess }: QuestionCardInstanceProps) => {
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
    <QuestionCard
      title=""
      onSuccess={onSuccess}
      placeholderUserAnswer=""
      newQuestion={generateNewQuestion}
    />
  );
};
