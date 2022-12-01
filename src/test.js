import React, { useEffect, useState } from 'react';


const Currency = () => {
    const [amount, setAmount] = useState();
    const [rates, setRates] = useState([]);
 
    const [cal, setCal] = useState(0);

    const [am, setAm] = useState();


    useEffect(()=> {
        alert("hello!")
        fetch("http://api.exchangeratesapi.io/v1/latest?access_key=90483863a86316a3a5e8e070305f80cd&format=1")
        .then(res=> res.json())
        .then(data => {
            alert("pass!")
            setRates(data.rates);   
            // setcurrencyList(Object.keys(data.rates));
        })
        
    },[]) 
    const onChange = (e) => {
        setAmount(e.target.value);
    }
    const setOption1 = (e) => {
        var op =e.target.value
        setAm(amount*rates[op]);
        console.log("1euro-> kor" + amount*rates[op]);
    }
    const calculate = (e) => {
        var op = e.target.value;
        console.log("1euro -> usd" + amount*rates[op]);
        setCal(amount*rates[op]/am);
    }

    return (
        <div>
          
            amount: <input onChange={onChange}/>
            <select onChange={setOption1}>
                {Object.keys(rates).map(key => (
                    <OptionRates value = {key}/>
                ))}
            </select>
            <select onChange={calculate}>
                {Object.keys(rates).map(key => (
                    <OptionRates value = {key}/>
                ))}
            </select>
           
            calculated amount : {amount * cal}
        </div>
    )
    

}


const OptionRates = (props)=> {


    return(
        
        <option value = {props.value} >{props.value}</option>
    )
}




export default Currency;