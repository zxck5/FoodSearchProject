import PrintFood from "./foodComponents/PrintFood";
import FoodButton from "./foodComponents/Button/foodcontentBtn";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const MyRecipe = (props) => {
  // var {,myRecipe} = useParams();
  var { userNum } = props.curUser;
  var arr = props.inven.filter(
    (obj) => obj.userNum == userNum && obj.label !== ""
  );
  console.log(arr);
  

  return (
    <div className="p-5">
      <Container className="p-5 shadow rounder border p-4">
        <div class="has-bg-img">
          <div class="row justify-content-center">
            <div class="text-center">
              <div>
                <h1>My Recipe</h1>
                <br></br>
                <div>
                  {arr.map((obj) => {
                    return (
                      <div>
                        <PrintFood recipe={obj} />,
                        <FoodButton recipe={obj} setRecipe={props.setRecipe} />
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
