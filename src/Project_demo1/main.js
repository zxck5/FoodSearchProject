import React, { useEffect, useState } from "react";
import Register from "./inputComponents/register";
// import Home from "./register";
import Nav from "./nav";
import { Routes, Route, Link, useParams,useNavigate,useLocation } from "react-router-dom";
import Content1 from "./searchfood";

const App = () => {
    const [info, setInfo] = useState([]);
    const [id, setId] = useState(1);    
    const [curUser, setCurUser] = useState({});
    const [foodDb, setFoodDb] = useState([]);
    const [inventory, setInventory] = useState([]);
    // handling register information
    const handleInfo = (data) => {
        alert("hi")
        data = {...data, userNum : id}
        var arr = info;
        console.log(arr);
        arr.push(data);
        setInfo(arr);
        setId(id+1);
    }
    // defining current user
    const setCurrentUser =(data)=> {
        console.log(data);
        setCurUser(data);
    }
    // handling food data
    const handleFood = (data) => {
        setFoodDb(data);
    }
    // handling inventory for specific users
    const handleInven = (data) => {
        console.log(data);
        data = {...data, userNum : curUser.userNum};
        var arr = inventory;
        arr.push(data);
        console.log(arr);
        setInventory(arr);
    }


    return (
        <div>
            curUser : {curUser.userNum}
            {info.map(obj => (<div>{JSON.stringify(obj)}</div>))}
            {console.log(info)} {console.log(curUser)}
            <Nav onCreate = {handleInfo} memberData = {info} setCurrentUser = {setCurrentUser} curUser = {curUser} 
            handleFood = {handleFood} foodDb = {foodDb} handleInven = {handleInven} inven = {inventory}
            />
            
            
            {console.log("inventory data:"+inventory)}
   
        </div>
    ) 

}


export default App;