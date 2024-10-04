/*  This is a mostly refactored card 
    Still need to work on settings
    Is my state in the right place?
*/

import React from "react";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import { StyledSettingsContainer } from "./CardStyles";

export const QuestionCardRF = (props: any) => {
  const [question, updateQuestion] = React.useState(props.defaultQuestion);
  const [userAnswer, setUserAnswer] = React.useState(props.defaultUserAnswer);
  const [correctAnswers, setCorrectAnswer] = React.useState(
    props.defaultCorrectAnswer
  );
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [settings, setSettings] = React.useState({
    aGreaterOne: false,
    negativeCoefficents: false,
    showSettings: false,
  });
  const updateCount = () => {
    const updatedCount = props.count + 1;
    props.onUpdateCount(updatedCount);
  };

  /*this function sets the new question and generates the correct answer then generates the question to display in the UI*/
  function newQuestion() {
    const questionFunctionOutput = props.newQuestion();
    setUserAnswer(questionFunctionOutput[0]);
    setCorrectAnswer(questionFunctionOutput[1]);
    updateQuestion(questionFunctionOutput[2]);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer(props.defaultUserAnswer);
    setQuestionCompleted(false);
    console.log(questionFunctionOutput);
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer: string) => {
      /*regex to format user answer to allow for comparison to correct answer*/
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/\b1x\b/g, "x");
      /* part above is specific to algebraic manipulation, rest is generic */
      for (let i = 0; i < correctAnswers.length; i++) {
        if (modifiedAnswer == correctAnswers[i]) {
          setCorrect(true);
          setIncorrect(false);
          setQuestionCompleted(true);
          questionCompleted ? {} : updateCount();
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
      <StyledSettingsButton onClick={showSettings}>
        Settings ⚙
      </StyledSettingsButton>
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

      <span>{question}</span>

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
    </StyledView>
  );
};
