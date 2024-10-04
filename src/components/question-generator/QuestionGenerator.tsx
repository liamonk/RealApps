import React from "react";
import { QuestionCardRF } from "./QuestionCardRF";
import { MathHelper } from "../../mathHelper";

export const QuestionGenerator = () => {
  const [count, setCount] = React.useState(Number(localStorage.getItem('count')));
  const onUpdateCount = (newCount: number) => {
    setCount(newCount);
    localStorage.setItem('count', String(newCount))
  };
  return (
    <>
      <div style={{ marginLeft: "10px" }}>Correct answers: {count}</div>
      <div style={{ display: "flex" }}>
        <QuestionCardRF
          title="Factorise Quadratic"
          count={count}
          onUpdateCount={onUpdateCount}
          defaultQuestion={
            <span>
              x<sup>2</sup>+5x+6
            </span>
          }
          defaultCorrectAnswer={["(x+2)(x+3)", "(x+3)(x+2)"]}
          defaultUserAnswer="(?x + ?)(?x + ?)"
          newQuestion={() => {
            /* y = ax^2 + bx + c = h(dx + e)i(fx + g) */
            let d = Math.abs(MathHelper.coefficentGenerator(5));
            let e = MathHelper.coefficentGenerator(6);
            let f = Math.abs(MathHelper.coefficentGenerator(2));
            let g = MathHelper.coefficentGenerator(6);
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
            let firstSign = "";
            if (b >= 0) {
              firstSign = "+";
            } else {
              firstSign = "";
            }
            let secondSign = "";
            if (c >= 0) {
              secondSign = "+";
            } else {
              secondSign = "";
            }
            let correctAnswer1 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${
              d / h
            }x+${e / h})(${f / i}x+${g / i})`
              .replace(/\+\-/g, "-")
              .replace(/1x/g, "x")
              .replace(/ /g, "");
            let correctAnswer2 = `${h != 1 ? h : ""}${i != 1 ? i : ""}(${
              f / i
            }x+${g / i})(${d / h}x+${e / h})`
              .replace(/\+\-/g, "-")
              .replace(/1x/g, "x")
              .replace(/ /g, "");
            const newQuestion = (
              <span>
                {a}x<sup>2</sup> {firstSign} {b}x {secondSign} {c}
              </span>
            );
            return [
              `... coefficent in first bracket is ${d}`,
              [correctAnswer1, correctAnswer2],
              newQuestion,
            ];
          }}
        />
        <QuestionCardRF
          title="Adding Integer"
          count={count}
          onUpdateCount={onUpdateCount}
          defaultQuestion="1+1"
          defaultCorrectAnswer={["2"]}
          defaultUserAnswer="?"
          newQuestion={() => {
            const a = MathHelper.coefficentGenerator(10);
            const b = MathHelper.coefficentGenerator(10);
            const newQuestion = `${a} + ${b}`;
            const correctAnswer = a + b;
            return [`... You can do it!`, [correctAnswer], newQuestion];
          }}
        />

        <QuestionCardRF
          title="Factorising single bracket"
          count={count}
          onUpdateCount={onUpdateCount}
          defaultQuestion="6x+10"
          defaultCorrectAnswer={["2(3x+5)"]}
          defaultUserAnswer="?(?x+?)"
          newQuestion={() => {
            /*a(bx+c) dx+c */
            const a = Math.abs(MathHelper.coefficentGenerator(6) + 1);
            const b = MathHelper.coefficentGenerator(6);
            const c = MathHelper.coefficentGenerator(6);
            const d = a * b;
            const e = a * c;
            const divisor = MathHelper.findHcf(b, c);
            const solution = `${a * divisor}(${b / divisor}x+${c / divisor})`
              .replace(/\+\-/g, "-")
              .replace(/\b1x\b/g, "x");
            const newQuestion = `${d}x ${e >= 0 ? "+" : ""} ${e}`;
            const correctAnswer = solution;
            return [`... HCF is ${a}`, [correctAnswer], newQuestion];
          }}
        />
      </div>
    </>
  );
};
