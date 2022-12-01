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
import Dropdown from "react-bootstrap/Dropdown";

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
    <div className="p-4">
      <Container className="shadow rounder border p-4">
        <div class="has-bg-img">
          <div class="row justify-content-center">
            <div class="text-center ">
              <div>
                <h1>Find a receipt</h1>
                <br></br>

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
                        placeholder="Calories"
                        type={"text"}
                        name={"calory"}
                        onChange={onChange}
                      />
                      <br></br>
                      <select class="form-control" name="cuisineType" onChange={onChange}>
                        <option selected>cuisineType</option>
                        <option value="American">American</option>
                        <option value="Asian">Caribbean</option>
                        <option value="British">British</option>
                        <option value="Central_Europe">Central Europe</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Eastern_Europe">Eastern Europe</option>
                        <option value="French">French</option>
                        <option value="Indian">Indian</option>
                        <option value="Italian">Italian</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Kosher">Kosher</option>
                        <option value="Mediterranean">Mediterranean</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Middle_Eastern">Middle Eastern</option>
                        <option value="Nordic">Nordic</option>
                        <option value="South_American">South American</option>
                        <option value="South_East_Asian">
                          South East Asian
                        </option>
                      </select>

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
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default App;
