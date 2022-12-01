import Button from "react-bootstrap/Button";

const ShowRecipe = (props) => {

    const onClick = () => {

        var { userNum } = props.curUser;

        if (!userNum) {
            alert("login your id please")
        } else {
            // validation
            // console.log(props.recipe)
            props.handleInven(props.recipe);
            alert("recipe added!");
        }

    }

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
            {/* {Object.keys(props.recipe).map(key=> {return <div> {props.recipe[key]} </div>})} */}
            <Button onClick={onClick}>click here to add to your recipes</Button>
        </div>
    )

}
export default ShowRecipe;