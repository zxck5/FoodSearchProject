import { useNavigate, useParams } from "react-router-dom";
import Row from 'react-bootstrap/Row';

import Figure from 'react-bootstrap/Figure';

const PrintFood = (props) => {

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

                </Figure.Caption>
            </Figure>




        </Row>
    )
}



export default PrintFood;