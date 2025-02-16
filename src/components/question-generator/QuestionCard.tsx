import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import React, { useEffect } from "react";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import { StyledSettingsContainer } from "./CardStyles";
import { NewQuestionOutput } from "./QuestionGenerator";
import { MathHelper } from "./../../mathHelper";

export interface QuestionCardProps {
  newQuestion: () => NewQuestionOutput;
  placeholderUserAnswer: string;
  title: string;
  onSuccess: () => void;
}

export interface QuestionCardInstanceProps {
  onSuccess: () => void;
  onlyQuestion?: boolean;
  showAnswers?: boolean
}

export const QuestionCard = (props: QuestionCardProps) => {
  const [question, updateQuestion] = React.useState("");
  const [userAnswer, setUserAnswer] = React.useState("");
  const [correctAnswers, setCorrectAnswers] = React.useState<string[]>([]);
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [hint, setHint] = React.useState("");
  const [showHint, setShowHint] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [settings, setSettings] = React.useState({
    aGreaterOne: false,
    negativeCoefficents: false,
    showSettings: false,
  });

  useEffect(() => {
    newQuestion();
  }, []);

  /*this function sets the new question and generates the correct answer then generates the question to display in the UI*/
  function newQuestion() {
    const questionFunctionOutput = props.newQuestion();
    setCorrectAnswers(questionFunctionOutput.answers);
    updateQuestion(questionFunctionOutput.question);
    setHint(questionFunctionOutput.hint);
    setCorrect(false);
    setIncorrect(false);
    setShowHint(false);
    setUserAnswer(props.placeholderUserAnswer);
    setQuestionCompleted(false);
    console.log(questionFunctionOutput);
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer: string) => {
      /*regex to format user answer to allow for comparison to correct answer*/
      let modifiedAnswer = MathHelper.ReformatMathStrings(prevAnswer);
      /* part above is specific to algebraic manipulation, rest is generic */
      for (let i = 0; i < correctAnswers.length; i++) {
        if (modifiedAnswer == correctAnswers[i]) {
          setCorrect(true);
          setIncorrect(false);
          setQuestionCompleted(true);
          questionCompleted ? {} : props.onSuccess();
          {
            break;
          }
        } else {
          setIncorrect(true);
          setCorrect(false);
        }
      }
      console.log("correctAnswers" + correctAnswers + "Question" + question);
      return modifiedAnswer;
    });
  };

  function handleAnswerChange(event: any) {
    setUserAnswer(event.target.value);
  }

  const handleShowHint = () => {
    setShowHint((prevShowHint) => !prevShowHint);
  };

  function showSettings() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      showSettings: !prevSettings.showSettings,
    }));
  }

  /*This needs attention */
  const handleANegativeSettingsChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      aGreaterOne: !prevSettings.aGreaterOne,
    }));
  };

  const handleNegativeCoefficentsSettingsChange = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      negativeCoefficents: !prevSettings.negativeCoefficents,
    }));
  };

  return (
    <StyledView>
      <span>
        {settings.showSettings ? (
          <StyledSettingsContainer>
            <StyledButton
              style={{ height: "30px" }}
              onClick={handleANegativeSettingsChange}
            >
              {settings.aGreaterOne ? "a > 1" : "a = 1"}
            </StyledButton>
            <StyledButton
              style={{ height: "30px" }}
              onClick={handleNegativeCoefficentsSettingsChange}
            >
              negatives {settings.negativeCoefficents ? "✓" : "☓"}
            </StyledButton>
          </StyledSettingsContainer>
        ) : (
          ""
        )}
      </span>
      <h3>{props.title}</h3>
        
      <Latex macros={{}}>{question}</Latex>

      <StyledTextArea
        value={userAnswer}
        onChange={handleAnswerChange}
      ></StyledTextArea>

      <StyledButton onClick={checkAnswer}>Check answer</StyledButton>
      <StyledButton onClick={newQuestion}>New Question</StyledButton>

      <span>
        {correct ? "Well done!" : ""}
        {incorrect ? "Try again!" : ""}
      </span>
      <span>
        {incorrect ? (
          <StyledButton onClick={handleShowHint}>
            {showHint ? String(hint) : "Hint?"}
          </StyledButton>
        ) : (
          ""
        )}
      </span>
    </StyledView>
  );
};
