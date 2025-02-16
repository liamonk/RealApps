import React from "react";
import { FactoriseQuadratic } from "../question-generator/question-types/factoriseQuadratic";
import {
  QuestionGeneratorStyle,
  StyledButton,
  StyledTextArea,
} from "../question-generator/CardStyles";


export const WorksheetGenerator = () => {
const [showAnswers, setShowAnswers] = React.useState(false)
  const [numberOfQuestions, setNumberOfQuestions] = React.useState(10);
  let questions: React.ReactElement[] = [];

  for (let i = 0; i < numberOfQuestions; i++) {
    questions.push(
      <div>
        <div>Question {i + 1}</div>
        <FactoriseQuadratic onSuccess={() => {}} onlyQuestion={true} showAnswers = {showAnswers}/>
        <br></br>
      </div>
    );
  }

  function handleNumberOfQuestionsChange(event: any) {
    setNumberOfQuestions(event.target.value);
  }

  const handleShowAnswersChange =()=>{
    setShowAnswers((prevShowAnswers)=>!prevShowAnswers)
  }

  return (
    <>
      <QuestionGeneratorStyle>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {" "}
          <p style={{marginRight: '20px'}}>Number Of Questions</p>
          <StyledTextArea
            style={{ width: "50px", height: "25px", marginLeft: "0" }}
            value={numberOfQuestions}
            onChange={handleNumberOfQuestionsChange}
          ></StyledTextArea>
          <StyledButton style={{marginLeft:'1em'}} onClick={handleShowAnswersChange}>Show answers</StyledButton>
        </div>
        <h1>Factorise</h1>
        <div>{questions}</div>
      </QuestionGeneratorStyle>
    </>
  );
};
