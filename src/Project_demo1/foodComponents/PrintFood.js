import { useNavigate,useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Button from "react-bootstrap/Button";
const PrintFood = (props) => {
    var navigate = useNavigate();
    var { foodname } = useParams();
    const onClick = () => {
        console.log(props.recipe);
        props.setRecipe(props.recipe);
        navigate('/foodsearch/' + foodname + '/recipe');
    }

    return (
        <Row className="m-2">
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src={props.recipe.image}
                />
                <Figure.Caption>
                    name : {props.recipe.label} <br></br>
                    calories : {props.recipe.calories} <br></br>
                    <Button recipe={props.recipe} onClick={onClick}>see the recipe</Button>
                </Figure.Caption>
            </Figure>

            {/* <Image thumbnail={true} src={props.recipe.image} ></Image> */}


        </Row>
    )
}
export default PrintFood;