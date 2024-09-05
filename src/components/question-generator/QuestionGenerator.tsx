import React from "react";
import FactoriseQuadratic from "./FactorisingQuadratic"


export const QuestionGenerator =()=>{
const [count, setCount] = React.useState(0);
  const onUpdateCount = (newCount : number) => {
    setCount(newCount);
  };
    return(
        <>
        <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
        <FactoriseQuadratic count={count} onUpdateCount={onUpdateCount} />
        </>
    )
}