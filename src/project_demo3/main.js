import React, { useState } from "react";
import Sidebar from "./sidebar";
import Navigation from "./navigation";

const App = () => {
  const [info, setInfo] = useState([]);
  const [id, setId] = useState(1);
  const [curUser, setCurUser] = useState({});
  const [foodDb, setFoodDb] = useState([]);
  const [inventory, setInventory] = useState([]);
  // handling register information


  var welcome = (curUser.fn) ? "Welcome!"+curUser.fn : ""; 


  const handleInfo = (data) => {

    data = { ...data, userNum: id };
    var arr = info;
    console.log(arr);
    arr.push(data);
    setInfo(arr);
    setId(id + 1);
  };
  // defining current user
  const setCurrentUser = (data) => {
    console.log(data);
    setCurUser(data);
  };
  // handling food data
  const handleFood = (data) => {
    setFoodDb(data);
  };
  // handling inventory for specific users
  const handleInven = (data) => {
    console.log(data);
    data = { ...data, userNum: curUser.userNum };
    var arr = inventory;
    arr.push(data);
    console.log(arr);
    setInventory(arr);
  };
  const setInven = (data) => {
    setInventory(data);
  }


  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto h-auto">
          <Sidebar class="float-left d-inline-flex flex-row align-self-stretch" />
        </div>
        <div class="col h-auto">
          {welcome}
          {info.map((obj) => (
            <div>{JSON.stringify(obj)}</div>
          ))}
          {console.log(info)} {console.log(curUser)}
          <Navigation
            onCreate={handleInfo}
            memberData={info}
            setCurrentUser={setCurrentUser}
            curUser={curUser}
            handleFood={handleFood}
            foodDb={foodDb}
            handleInven={handleInven}
            inven={inventory}
            setInven={setInven}
          />
          {console.log("inventory data:" + inventory)}
        </div>
      </div>
    </div>
  );
};

export default App;
