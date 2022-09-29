import RecipeInfo from "./RecipeInfo";
import AddRecipeBtn from "./Button/AddRecipeBtn";


const DisplayRecipe = (props) => {

    return(
        <div>
            <RecipeInfo recipe = {props.recipe}/>
            <AddRecipeBtn recipe={props.recipe}
                handleInven={props.handleInven}
                curUser={props.curUser}
                inven={props.inven} />
        </div>
    )
}

export default DisplayRecipe;