// import './App.css';
import { useRef } from "react";
export default function App() {
 return (
  <div className="App">
   <UserInput />
  </div>
 );
}

function UserInput() {
 const element_Name = useRef();
 
 var onClick = () => {
  alert(element_Name.current.value)
 };
 return (
  <div>
   <h1>Hello !</h1>
   <label for="name">Name</label><input ref={element_Name} id="name" type="text" />
   <button onClick={onClick}>Submit</button>
  </div>
 );
}
