import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const App = (props) => {
  var navigate = useNavigate();
  const [food, setFood] = useState({ calory: "" });
  const [curRecipe, setCurRecipe] = useState({});

  const onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setFood({ ...food, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    props.sendFood(food);
    var foodtype = food.foodName;
    var url =
      "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      foodtype +
      "&app_id=7fffb998&app_key=425939ed5fafae152942b5aa6d966815";
    fetch(url)
      .then((res) => res.json())
      .then((json) => props.handleFood(json.hits));

    navigate("/foodsearch/" + food.foodName);
  };

  return (
    <div>
      <Container classname="sahdow rounder border p-4">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <form onSubmit={onSubmit}>
              <input
                class="form-control"
                placeholder="Food"
                type={"text"}
                name={"foodName"}
                onChange={onChange}
              />
              <br></br>
              <input
                class="form-control"
                placeholder="Calory"
                type={"text"}
                name={"calory"}
                onChange={onChange}
              />
              <br></br>
              <button
                class="form-control btn btn-primary rounded submit px-3"
                variant={"primary"}
                type={"submit"}
                value={"submit"}
              >
                Search
              </button>

              {/* {console.log(props.foodDb)} */}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
