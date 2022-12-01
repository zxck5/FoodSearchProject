import PrintFood from "../foodComponents/PrintFood";
import FoodButton from "../foodComponents/Button/foodcontentBtn";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import FoodDelete from "../foodComponents/Button/FoodDelete";
import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";

const MyRecipe = (props) => {
 
  const [arr, setArr] = useState(props.inven.filter(
    (obj) => obj.userNum == props.curUser.userNum && obj.label !== ""
  ));

  // var {,myRecipe} = useParams();
  var { userNum } = props.curUser;


  console.log(userNum);
  console.log(arr);

  return (
    <div className="p-5">
      <Container className="p-5 shadow rounder border p-4">
        <div class="has-bg-img">
          <div class="row justify-content-center">
            <div class="text-center">
              <div>
                <h1>My Receipt</h1>
                <br></br>
                <div>
                  {arr.map((obj) => {
                    return (
                      <div>
                        <PrintFood recipe={obj} />
                        <FoodButton recipe={obj} setRecipe={props.setRecipe} />
                        <FoodDelete recipe={obj} inven={props.inven} setInven={props.setInven} userNum = {userNum} setArr = {setArr} />
                        
                        <br></br>
                        <br></br>
                        <br></br>
                      </div>
                    );
                  })}
                  {console.log(props.inven)}
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyRecipe;
