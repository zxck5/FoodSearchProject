import { useNavigate,useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
const SendFood = (props) => {
    var navigate = useNavigate();
    var { foodname } = useParams();

    const onClick = () => {
        console.log(props.recipe);
        props.setRecipe(props.recipe);
        if (!foodname){
            navigate('/users/myRecipe/info');
        } else {
            navigate('/foodsearch/' + foodname + '/recipe');
        }

    }
    return (
        <Button recipe={props.recipe} onClick={onClick}>see the recipe</Button>
    )
}
export default SendFood;