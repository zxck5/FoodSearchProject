import React,{useState} from "react";
import Register from "./inputComponents/register";
import Login from "./inputComponents/login";
import { Routes, Route, Link, useParams,useNavigate,useLocation } from "react-router-dom";
import Content1 from './searchfood';
import FoodContent from "./foodComponents/FoodContent";
import ShowRecipe from "./foodComponents/ShowRecipe";
const Nav = (props)=> {

    //  Food contents 
    const [food, setFood] = useState({ calory: "" });
    const [curRecipe, setCurRecipe] = useState({});


    // functions for food
    const sendFood = (data) => {
        setFood(data);
    }

    const setRecipe = (data) => {
        setCurRecipe(data);
    }

   
   
    return(
        <div>
            <Link to= "/">Home</Link> {' | '}
            <Link to= "users/register">Register</Link> {' | '} 
            <Link to="users/login">Login</Link> {' | '}
            {props.memberData.map(obj => (<div>{JSON.stringify(obj)}</div>))}

            <Routes>
                
                <Route path="/" element={<Home sendFood={sendFood} handleFood= {props.handleFood} foodDb={props.foodDb} handleInven={props.handleInven} curUser={props.curUser}/>}/>
                <Route path="users/register" element={<Register onCreate = {props.onCreate}  memberData = {props.memberData}/>}/>
                <Route path="users/login" element={<Login currentUser = {props.setCurrentUser} memberData = {props.memberData} />}/>
                <Route path= "/users/register/success" element={<RegisterSuccess/>}/>
                <Route path= "/users/login/success" element={<LoginSuccess curUser = {props.curUser}/>}/>
                <Route path={'/foodsearch/:foodname'} element={<FoodContent foodDb={props.foodDb} setRecipe={setRecipe} food = {food} />} />
                <Route path={'/foodsearch/:foodname/recipe'} element={<ShowRecipe recipe={curRecipe} handleInven={props.handleInven} curUser={props.curUser} />} />
            </Routes>
        </div>
    ) 

}
const RegisterSuccess = () => {
    return (
        <div><h1>RegisterSuccess</h1></div>
    ) 
}
const LoginSuccess = (props) => {
    return(
        <div>
            <h1>Welcome {props.curUser.id} {props.curUser.fn} {props.curUser.ln} {props.curUser.em}</h1>
            <h1>LoginSuccess</h1>
        </div>
    )
}

const Home = (props) => {
    return(
        // <div>Home</div>
        <Content1 sendFood = {props.sendFood} handleFood = {props.handleFood} foodDb = {props.foodDb} handleInven = {props.handleInven} curUser = {props.curUser} />
    )
}








export default Nav;