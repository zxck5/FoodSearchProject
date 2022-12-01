import PrintFood from "../foodComponents/PrintFood";
import FoodButton from "../foodComponents/Button/foodcontentBtn";
import FoodDelete from "../foodComponents/Button/FoodDelete";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Check from "../foodComponents/Check";
import ComparisonBtn from "../foodComponents/Button/ComparisonBtn";
import { useEffect, useState } from "react";

const MyRecipe = (props) => {
  // arr2 is for comparison array that is sorted by check box
  const [arr2, setArr2] = useState([]);
  // arr is myRecipe. it is sorted by userNum from inventory
  const [arr, setArr] = useState(
    props.inven.filter(
      (obj) => obj.userNum == props.curUser.userNum && obj.label !== ""
    )
  );

  // var {,myRecipe} = useParams();

  var { userNum } = props.curUser;

  const passObj = (data) => {
    var arr = arr2;
    arr.push(data);
    setArr2(arr);
    console.log(arr);
  };
  const clickAgain = (data) => {
    // console.log("debuggggggg" + data.mark);
    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i].label === data.label) {
        arr2.splice(i, 1);
      }
    }
  };

  return (
    <div className="p-5">
      <Container className="p-5 shadow rounder border p-4">
        <div class="has-bg-img">
          <div class="row justify-content-center">
            <div class="text-center">
              <div>
                <h1>My Receipe</h1>
                <br></br>
                <div>
                  {arr.map((obj) => {
                    return (
                      <div>
                        <PrintFood recipe={obj} />
                        <FoodButton recipe={obj} setRecipe={props.setRecipe} />
                        <div class="form-check form-check-inline checkbox-danger checkbox-lg">
                          <FoodDelete
                            recipe={obj}
                            inven={props.inven}
                            setInven={props.setInven}
                            userNum={userNum}
                            setArr={setArr}
                          />
                          {"  "}
                          <Check
                            class="btn-primary"
                            recipe={obj}
                            passObj={passObj}
                            clickAgain={clickAgain}
                          />
                        </div>
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
        <ComparisonBtn sendCompArr={props.sendCompArr} arr={arr} arr2={arr2} />
      </Container>
    </div>
  );
};

export default MyRecipe;
