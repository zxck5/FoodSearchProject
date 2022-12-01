import PrintFood from "./foodComponents/PrintFood";
import FoodButton from "./foodComponents/Button/foodcontentBtn"
import { useParams } from "react-router-dom";



const MyRecipe = (props) => {
    // var {,myRecipe} = useParams();
    var {userNum}= props.curUser;
    var arr = props.inven.filter((obj) => obj.userNum == userNum && obj.label !== "");
    console.log(arr);
 



    return(
        
        <div>
            MyRecipe
            {arr.map((obj)=> {return (
                <div>
                    <PrintFood recipe = {obj}  />
                    <FoodButton recipe={obj} setRecipe={props.setRecipe}/>
                    {/* TODO : checkbox  //myrecipes = {arr}, index --> onCheck --> 해당 인덱스의 arr을 check=true라는 key value 쌍을 집어넣자*/}
                    {/* {comparison submit button} */}
                    {/* onSubmit ==> navigate ==> new component  props.setCompRecipe(arr) --> new component에다가 props로 넣어줌--> filter */}
                </div>
                    ) 
            })}
            {console.log(props.inven)}    
        </div>
    )
}

export default MyRecipe;