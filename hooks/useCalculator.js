import { useReducer } from "react";
import calculatorReducer from "@/reducers/calculatorReducer";

export default function useCalculator(){
    const[state,dispatch]=useReducer(calculatorReducer,{
        expression:"",
        result:"0",
        memory:"0",
        history:[],
    })


    const inputNumber=(number)=>{
        dispatch({
            type:"INPUT_NUMBER",
            payload:number
        });
    }

    const inputOperator=(operator)=>{
        dispatch({
            type:"INPUT_OPERATOR",
            payload:operator
        });
    }

    const calculate=()=>{
        dispatch({
            type:"CALCULATE",
        });
    }


    const clear=()=>{
        dispatch({
            type:"CLEAR"
        })
    }
    const backspace=()=>{
        dispatch({
            type:"BACKSPACE"
        })
    }


    return{
        state,
        clear,
        backspace,
        inputNumber,
        inputOperator,
        calculate,
    }
}