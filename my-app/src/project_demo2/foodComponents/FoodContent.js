import { useParams } from "react-router-dom";
import PrintFood from "./PrintFood";
import FoodButton from "./Button/foodcontentBtn";
import Container from "react-bootstrap/Container";

const FoodContent = (props) => {
  const { foodName } = useParams();
 
  
  var arr = validation(Object.keys(props.food), props.foodDb, props.food);

  return (
    <div>
      <div className="p-5">
        <Container className="p-5 shadow rounder border">
          <div class="text-center p-3">
            <h1>Recipe</h1>
          </div>
          <div class="container">
            <div class="row ">
              {/* {console.log(props.foodDb[0].recipe.calories)} */}
              {/* {console.log(props.foodDb.map((obj) => { return obj.recipe.calories }))} */}
              {/* {props.foodDb.map((obj) => { return <PrintFood recipe={obj.recipe} /> })} */}
              {/* {<PrintFood recipe={(props.foodDb.filter((obj)=>{return obj.recipe.calories < 2000})).recipe}/>} */}
              {arr.map((obj) => {
                return (
                  <div class="col-6 col-md-4 p-3">
                    <div class="card p-4 text-center">
                      <div class=" flex-row ">
                        <PrintFood
                          recipe={obj.recipe}
                          setRecipe={props.setRecipe}
                        />
                      </div>
                      <FoodButton
                        curRecipe={props.curRecipe}
                        recipe={obj.recipe}
                        setRecipe={props.setRecipe}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
const validation = (keys,foodDb, food) => {
  var calory = food.calory;
  var cuisineType = food.cuisineType; 
  var arr;
  console.log(keys);
  for (var i = 0; i < keys.length; i ++) {
    if (keys[i] == "calory") {
      (calory !== undefined && calory !== "") 
    ? (arr = foodDb.filter(
        (obj) => (obj.recipe.calories < food.calory) 
      ))
    : (arr = foodDb.map((obj) => obj));
    }
    if (keys[i] == "cuisineType") {
      console.log("pass!!!!")
      if (cuisineType !== undefined && cuisineType !== "cuisineType") {
        arr = arr.filter((obj) => (searchType(cuisineType, obj.recipe.cuisineType)))
      } 
    }
  }
  return arr;
}

const searchType = (value, arr) => {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i].toLowerCase() == value.toLowerCase()) {
      return true;
    }
  }
  return false;
}

export default FoodContent;
