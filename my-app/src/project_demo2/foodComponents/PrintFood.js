import { useNavigate, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";

import Figure from "react-bootstrap/Figure";

const PrintFood = (props) => {
  return (
    <Figure class="justify-content-center text-center center-block">
      <Figure.Image
        class="justify-content-center text-center center-block"
        width={205}
        height={216}
        alt="171x180"
        src={props.recipe.image}
      />
      <div class="d-flex flex-column ml-2">
        <span>{props.recipe.label} </span>
        <span class="text-black-50">
          calories : {props.recipe.calories} <br></br>cuisineType :{" "}
          {props.recipe.cuisineType} <br></br>
        </span>
        <span class="ratings">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </span>
      </div>
    </Figure>
  );
};

export default PrintFood;
