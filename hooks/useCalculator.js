"use client";

import { useEffect, useReducer } from "react";
import calculatorReducer from "@/reducers/calculatorReducer";
import useLocalStorage from "./useLocalStorage";

export default function useCalculator() {
  const [state, dispatch] = useReducer(calculatorReducer, {
    expression: "",
    result: "0",
    memory: 0,
    history: [],
  });

  const [savedHistory, setSavedHistory] = useLocalStorage(
    "nexacalc-history",
    []
  );

  // Connects calculator calculations with persistent history stored in the browser
  useEffect(() => {
    if (state.history.length > savedHistory.length) {
      setSavedHistory(state.history);
    }
  }, [state.history, savedHistory.length, setSavedHistory]);

  const inputNumber = (number) => {
    dispatch({
      type: "INPUT_NUMBER",
      payload: number,
    });
  };

  const inputOperator = (operator) => {
    dispatch({
      type: "INPUT_OPERATOR",
      payload: operator,
    });
  };

  const calculate = () => {
    dispatch({
      type: "CALCULATE",
    });
  };

  const clear = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const backspace = () => {
    dispatch({
      type: "BACKSPACE",
    });
  };

  return {
    state: {
      ...state,
      history: savedHistory,
    },
    inputNumber,
    inputOperator,
    calculate,
    clear,
    backspace,
  };
}
