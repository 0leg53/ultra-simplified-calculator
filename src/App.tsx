import React, { useState } from "react";

import "./App.css";

import { CalcButton, Grid, FlexContainer, ExpressionBlock } from "./components";

const initialValues = {
  firstValue: 0,
  operator: "+",
};

const App: React.FC = () => {
  const [expression, setExpression] = useState<string>("");
  const [values, setValues] = useState(initialValues);
  const [expectedStep, setExpectedStep] = useState<
    "firstValue" | "secondValue"
  >("firstValue");

  const pushToExpression = (value: string) => {
    setExpression((prevValue) => prevValue + value);
  };
  const setOperator = (operator: string) => {
    if (expectedStep === "firstValue") {
      setValues({ ...values, operator, firstValue: Number(expression) });
      setExpression("");
      setExpectedStep("secondValue");
      return;
    }
  };
  const clear = () => {
    setExpression("");
    setValues(initialValues);
    setExpectedStep("firstValue");
  };

  const calculate = () => {
    if (expectedStep === "secondValue") {
      const firstValue = values.firstValue,
        secondValue = Number(expression);
      clear();
      switch (values.operator) {
        case "+":
          return firstValue + secondValue;
        case "-":
          return firstValue - secondValue;
        case "*":
          return firstValue * secondValue;
        case "/":
          return firstValue / secondValue;
        default:
          return 0;
      }
    }
    return 0;
  };

  const CONTROLS_LIST = [
    { glyph: "+", action: () => setOperator("+") },
    { glyph: "-", action: () => setOperator("-") },
    { glyph: "*", action: () => setOperator("*") },
    { glyph: "÷", action: () => setOperator("/") },
    // { glyph: "(", action: () => pushToExpression("(") },
    // { glyph: ")", action: () => pushToExpression(")") },
    { glyph: "C", action: () => clear() },
    { glyph: "=", action: () => setExpression(calculate().toString()) },
  ];
  return (
    <div className="App">
      <ExpressionBlock value={expression} />
      <FlexContainer>
        <>
          <Grid columns={3} rows={4}>
            {Array(10)
              .fill(null)
              .map((item, index) => (
                <CalcButton
                  key={index}
                  onClick={() => pushToExpression(index.toString())}
                >
                  {index}
                </CalcButton>
              ))}
          </Grid>

          <Grid columns={2} rows={4}>
            {CONTROLS_LIST.map((item, index) => (
              <CalcButton key={index} color={"secodary"} onClick={item.action}>
                {item.glyph}
              </CalcButton>
            ))}
          </Grid>
        </>
      </FlexContainer>
    </div>
  );
};

export default App;
