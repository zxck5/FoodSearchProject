import Container from "react-bootstrap/Container";

const ShowRecipe = (props) => {
  return (
    <div>
      <div className="p-5">
        <Container className="p-5 shadow rounder border">
          {console.log(props.recipe)}
          {console.log(props.recipe.calories)}
          name : {props.recipe.label}
          <br></br>
          calories : {props.recipe.calories}
          {/* {console.log(
            "recipe ingredients:" +
              props.recipe.ingredients.map((element) => {
                return element.text;
              })
          )} */}
          {props.recipe.ingredients.map((element) => {
            return <div>{element.text}</div>;
          })}
        </Container>
      </div>{" "}
    </div>
  );
};

export default ShowRecipe;
