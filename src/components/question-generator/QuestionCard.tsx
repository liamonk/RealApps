import React from "react";
import { StyledView } from "./CardStyles";
import { StyledButton } from "./CardStyles";
import { StyledTextArea } from "./CardStyles";
import { StyledSettingsButton } from "./CardStyles";
import {StyledSettingsContainer} from "./CardStyles";
import { MathHelper } from "../../mathHelper";

export const QuestionCard=(props : any)=> {
  const [questionCoefficents, setQuestionCoefficents] = React.useState([
    1, 2, 1,
  ]);
  const [questionForUI, updateQuestionForUI] = React.useState('Click New Question to start')
  const [userAnswer, setUserAnswer] = React.useState("(? x + ?)(? x + ?)");
  const [correct, setCorrect] = React.useState(false);
  const [incorrect, setIncorrect] = React.useState(false);
  const [questionCompleted, setQuestionCompleted] = React.useState(false);
  const [correctAnswers, setCorrectAnswer] = React.useState(["(x+1)(x+1)", ""]);
  const [settings, setSettings] = React.useState({
    aGreaterOne: false,
    negativeCoefficents: false,
    showSettings: false,
  });
  const updateCount = () => {
    const updatedCount = props.count + 1;
    props.onUpdateCount(updatedCount);
  };




  /*this function sets the new question and generates the correct answer*/
  function newQuestion() {
    /* y = ax^2 + bx + c = h(dx + e)i(fx + g) */
    let d = Math.abs(MathHelper.coefficentGenerator(settings.aGreaterOne ? 5 : 1));
    let e = settings.negativeCoefficents
      ? MathHelper.coefficentGenerator(6)
      : Math.abs(MathHelper.coefficentGenerator(6));
    let f = Math.abs(MathHelper.coefficentGenerator(settings.aGreaterOne ? 2 : 1));
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
    setQuestionCoefficents([a, b, c]);
    setCorrect(false);
    setIncorrect(false);
    setUserAnswer("( x + )( x + )");
    setQuestionCompleted(false);

    /* generate question for UI */

    /*
    const generateQuestionForUI = ()=>{
      let question =
       `${questionCoefficents[0] != 1 ? questionCoefficents[0] : ""}x`}
      <sup>2</sup>
      {`${questionCoefficents[1] >= 0 ? "+" : "-"} ${
        questionCoefficents[1] != 1 ? questionCoefficents[1] : ""
      }x ${questionCoefficents[2] >= 0 ? "+" : "-"} ${questionCoefficents[2]}`
      return question
    }
      */

    const generateQuestionForUI = () => {
      let question = `${questionCoefficents[0] !== 1 ? questionCoefficents[0] : ""}x`;
      question += `^2`;
      question += `${questionCoefficents[1] >= 0 ? "+" : "-"} ${
        questionCoefficents[1] !== 1 ? questionCoefficents[1] : ""
      }x `;
      question += `${questionCoefficents[2] >= 0 ? "+" : "-"} ${questionCoefficents[2]}`;
      return question;
    };


      updateQuestionForUI(generateQuestionForUI)
    
} 

  const checkAnswer = () => {
    setUserAnswer((prevAnswer) => {
      /*regex to format user answer to allow for comparison to correct answer*/
      let modifiedAnswer = prevAnswer
        .replace(/ /g, "")
        .replace(/\+\-/g, "-")
        .replace(/\b1x\b/g, "x");
      
      for (let i=0; i< correctAnswers.length;i++ ){
        if (
        modifiedAnswer == correctAnswers[i] 
      ) {
        setCorrect(true);
        setIncorrect(false);
        setQuestionCompleted(true);
        {break}
        questionCompleted ? {} : updateCount();
      } else {
        setIncorrect(true);
        setCorrect(false);
      }}

      return modifiedAnswer;
    });
    console.log("correctAnswers" + correctAnswers);
  };

  function handleAnswerChange(event : any) {
    setUserAnswer(event.target.value);
  }

  function showSettings() {
    setSettings((prevSettings) => ({
      ...prevSettings,
      showSettings: !prevSettings.showSettings,
    }));
  }

  /*  
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

      <span>
        {questionForUI}
      </span>

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
}
