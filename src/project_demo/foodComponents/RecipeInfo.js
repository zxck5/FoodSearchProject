import Button from "react-bootstrap/Button";

const ShowRecipe = (props) => {


    return (
        <div>Hello
            <br></br>
            {console.log(props.recipe)}
            {console.log(props.recipe.calories)}
            name : {props.recipe.label}
            <br></br>
            calories : {props.recipe.calories}
            {console.log("recipe ingredients:" + props.recipe.ingredients.map(element => { return element.text }))}
            {props.recipe.ingredients.map(element => { return <div>{element.text}</div> })}
            {/* <Button onClick={onClick}>click here to add to your recipes</Button> */}
            {/* <AddRecipeBtn recipe={props.recipe}
                handleInven={props.handleInven}
                curUser={props.curUser}
                inven={props.inven} /> */}
        </div>
    )

}
const AddRecipeBtn = (props) => {
    const onClick = () => {

        var { userNum } = props.curUser;

        if (!userNum) {
            alert("login your id please")
        } else {
            // validating inventory no duplicates
            console.log(props.inven);
            var inven = props.inven.filter((obj) => obj.userNum == userNum && obj.label !== "");
            var bool = true;
            console.log(props.recipe.label);
            for (var i = 0; i < inven.length; i++) {
                if (inven[i].label === props.recipe.label) {
                    bool = false;
                    alert("you already have that recipe")
                    break;
                }
            }
            if (bool) {
                props.handleInven(props.recipe);
                alert("recipe added!")
            }

            // var inven = props.inven.sort(function(a,b){
            //     if ((a.label).trim > (b.label).trim) return 1;
            //     else if ((a.label).trim < (b.label).trim) return -1;
            //     else return 0;
            // })
            // console.log(inven);



            // if (!binarySearch(inven, 0, inven.length-1, )) {
            // props.handleInven(props.recipe);
            //     alert("recipe added!");
            // }
        }

    }

    return (
        <Button onClick={onClick}>click here to add to your recipes</Button>
    )
}


export default ShowRecipe;