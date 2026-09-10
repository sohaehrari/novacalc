"use client"



import { useCallback, useState } from "react";

export default function useCurrency(){
    const[result,setResult]=useState(null);
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("");
    const convertCurrency=useCallback(async(from,to,amount)=>{
        setLoading(true);
        setError("")
        setResult(null)
    
try{
    const response=await fetch(`/api/currency?from=${from}&to=${to}&amount=${amount}`)

    if(!response.ok){
        throw new Error("failed")
    }
    const data=await response.json();
    setResult(data);
}catch{
    setError("try to focus again")
}finally{
    setLoading(false)
}
},[])

return{
    result,
    loading,
    error,
    convertCurrency,
}
}