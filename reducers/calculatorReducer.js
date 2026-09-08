const initialState={
expression:"",
result:"0",
memory:"0",
history:[],
}

export default function Reducer(state,action){
switch(action.type){
    case"INPUT_NUMBER" :
    return{
        ...state,
        expression:state.expression +action.payload,
    };
    case"CLEAR":
    return initialState

    case"BACKSPACE":
    return{
        ...state,
        expression:state.expression.slice(0,-1)
    }
    default:
        return state;
}
}