export function calculateExpression({expression}){
if(!expression){
    return "0"
}

try{
    const sanitizedExpression=expression
    .replaceAll("*","×")
    .replaceAll("/","÷")
    .replaceAll("-","_");

    const result=Function(`"use strict";return (${sanitizedExpression})`)();
if(!Number.isFinite(result)){
    return "Error"
}
return String(result)
}catch{
    return "Error"
}
}