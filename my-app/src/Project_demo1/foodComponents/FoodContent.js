import { useParams } from "react-router-dom";
import PrintFood from "./PrintFood";
const FoodContent = (props) => {
    const { foodName } = useParams();

    console.log("calory:"+props.food.calory);
    var calory = props.food.calory;
    var arr;
    calory !== undefined && calory !== "" ? arr = props.foodDb.filter((obj) => obj.recipe.calories < props.food.calory) : arr = props.foodDb.map((obj) => obj);

    

    return (
        <div>
            {/* {console.log(props.foodDb[0].recipe.calories)} */}
            {/* {console.log(props.foodDb.map((obj) => { return obj.recipe.calories }))} */}
            {/* {props.foodDb.map((obj) => { return <PrintFood recipe={obj.recipe} /> })} */}
            {/* {<PrintFood recipe={(props.foodDb.filter((obj)=>{return obj.recipe.calories < 2000})).recipe}/>} */}
            {arr.map(obj => { return <PrintFood recipe={obj.recipe} setRecipe={props.setRecipe} /> })}

        </div>
    )
}
export default FoodContent;