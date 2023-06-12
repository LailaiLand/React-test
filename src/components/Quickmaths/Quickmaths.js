import { useState, useContext } from "react";
import { Points } from "../../store/Points";
import { QuickMathsWrapper } from "../../store/QuickMathsWrapper";
import { QuestionRow } from "./screen/QuestionRow";
import { AnswerRow } from "./screen/AnswerRow";

function QuickMaths() {
  return (
    <QuickMathsWrapper>
      <div className="MiniPlayer">
        <table>
          <QuestionRow>
            <AnswerRow />
          </QuestionRow>
        </table>
      </div>
    </QuickMathsWrapper>
  );
}
export { QuickMaths };