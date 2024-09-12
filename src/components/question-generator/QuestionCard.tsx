/* This is a partially refactored card */

import React from "react";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import { StyledSettingsContainer } from "./CardStyles";
import { MathHelper } from "../../mathHelper";

export const QuestionCard = (props: any) => {
  const [questionForUI, updateQuestionForUI] = React.useState(
    "Click New Question to start"
  );
  const [userAnswer, setUserAnswer] = React.useState("(? x + ?)(? x + ?)");
  const [correctAnswers, setCorrectAnswer] = React.useState(["(x+1)(x+1)", ""]);
  /* above this is all state in newQuestion function*/
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
    /* y = ax^2 + bx + c = h(dx + e)i(fx + g) */
    let d = Math.abs(
      MathHelper.coefficentGenerator(settings.aGreaterOne ? 5 : 1)
    );
    let e = settings.negativeCoefficents
      ? MathHelper.coefficentGenerator(6)
      : Math.abs(MathHelper.coefficentGenerator(6));
    let f = Math.abs(
      MathHelper.coefficentGenerator(settings.aGreaterOne ? 2 : 1)
    );
    let g = settings.negativeCoefficents
      ? MathHelper.coefficentGenerator(6)
      : Math.abs(MathHelper.coefficentGenerator(6));
    let a = d * f;
    let b = d * g + e * f;
    let c = e * g;
    let h = 1;
    let i = 1;
    let firstBracketHCF = MathHelper.findHcf(d, e);
    let secondBracketHCF = MathHelper.findHcf(f, g);
    if (firstBracketHCF != 1) {
      h = firstBracketHCF;
    }
    if (secondBracketHCF != 1) {
      i = secondBracketHCF;
    }

    /* this part generates the correct answers based on the question */
    let solution1 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${d / h}x+${e / h})(${
      f / i
    }x+${g / i})`
      .replace(/\+\-/g, "-")
      .replace(/1x/g, "x")
      .replace(/ /g, "");
    let solution2 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${f / i}x+${g / i})(${
      d / h
    }x+${e / h})`
      .replace(/\+\-/g, "-")
      .replace(/1x/g, "x")
      .replace(/ /g, "");
    setCorrectAnswer([solution1, solution2]);
    /*this is generic*/
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )( x + )");
    setQuestionCompleted(false);

    /* generate question for UI */
    let question = `${a !== 1 ? a : ""}x`;
    question += `^2`;
    question += `${b >= 0 ? "+" : ""} ${b !== 1 ? b : ""}x `;
    question += `${c >= 0 ? "+" : ""} ${c}`;
    updateQuestionForUI(question);
  }

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      /*regex to format user answer to allow for comparison to correct answer*/
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/\b1x\b/g, "x");
      /* part bewteen these comments is question specific, rest is generic */
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

      return modifiedAnswer;
    });
    console.log("correctAnswers" + correctAnswers + "Question" + questionForUI);
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

  /* this is a failed attempt to generalise the setting changes  


  const handleSettingsChange = (settingToChange) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingToChange]: !prevSettings[settingToChange],
    }));
  };
*/

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
      <h3>Test</h3>

      <span>{questionForUI}</span>

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
