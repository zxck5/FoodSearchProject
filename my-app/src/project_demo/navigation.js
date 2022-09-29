import React, { useState } from "react";
import Register from "./inputComponents/register";
import Login from "./inputComponents/login";

import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
  Routes,
  Route,
  
} from "react-router-dom";
import Content1 from "./foodComponents/searchfood";
import FoodContent from "./foodComponents/FoodContent";
import RecipeInfo from "./foodComponents/RecipeInfo";
import MyRecipe from "./myRecipe";
import DisplayRecipe from "./foodComponents/DisplayRecipe";
import SideBar from "./Sidebar";

const Navigation = (props) => {
  //  Food contents
  const [food, setFood] = useState({ calory: "" });
  const [curRecipe, setCurRecipe] = useState({});

  // functions for food
  const sendFood = (data) => {
    setFood(data);
  };

  const setRecipe = (data) => {
    setCurRecipe(data);
  };

  return (
    <div className="d-flex">
      <SideBar/>
      {/* <Navbar class="navbar navbar-expand-xl navbar-light bg-light">
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/users/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="users/myRecipe">
              <Nav.Link>MyRecipe</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      {props.memberData.map((obj) => (
        <div>{JSON.stringify(obj)}</div>
      ))}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sendFood={sendFood}
              handleFood={props.handleFood}
              foodDb={props.foodDb}
              handleInven={props.handleInven}
              curUser={props.curUser}
            />
          }
        />
        <Route
          path="users/register"
          element={
            <Register onCreate={props.onCreate} memberData={props.memberData} />
          }
        />
        <Route
          path="users/login"
          element={
            <Login
              currentUser={props.setCurrentUser}
              memberData={props.memberData}
            />
          }
        />
        <Route path="/users/register/success" element={<RegisterSuccess />} />
        <Route
          path="/users/login/success"
          element={<LoginSuccess curUser={props.curUser} />}
        />
        <Route
          path={"/foodsearch/:foodname"}
          element={
            <FoodContent
              foodDb={props.foodDb}
              setRecipe={setRecipe}
              food={food}
              curRecipe={curRecipe}
            />
          }
        />
        <Route
          path={"/foodsearch/:foodname/recipe"}
          element={
            <DisplayRecipe
              recipe={curRecipe}
              handleInven={props.handleInven}
              curUser={props.curUser}
              inven = {props.inven}
            />
          }
        />
        <Route
          path={"/users/myRecipe/info"}
          element={
            <RecipeInfo
              recipe={curRecipe}
              handleInven={props.handleInven}
              curUser={props.curUser}
              inven = {props.inven}
            />
          }
        />

        <Route path={"users/myRecipe"} element={<MyRecipe inven = {props.inven} curUser = {props.curUser} setRecipe={setRecipe}/>}/>
      </Routes>
    </div>
  );
};
const RegisterSuccess = () => {
  return (
    <div>
      <h1>RegisterSuccess</h1>
    </div>
  );
};
const LoginSuccess = (props) => {
  return (
    <div>
      <h1>
        Welcome {props.curUser.id} {props.curUser.fn} {props.curUser.ln}{" "}
        {props.curUser.em}
      </h1>
      <h1>LoginSuccess</h1>
    </div>
  );
};

const Home = (props) => {
  return (
    // <div>Home</div>
    <Content1
      sendFood={props.sendFood}
      handleFood={props.handleFood}
      foodDb={props.foodDb}
      handleInven={props.handleInven}
      curUser={props.curUser}
    />
  );
};

export default Navigation;
