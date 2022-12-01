import PrintFood from "./PrintFood";
import React, { useState } from "react";

export default function Comparison(props) {
  const [arr, setArr] = useState(props.compArr);
  const [displayQuantity, setQuantity] = useState(props.compArr);
  const [displayUnit, setDispalyUnit] = useState();
  const [displayLabel, setDispalyLabel] = useState();

  const onChange = (e) => {
    var value = e.target.value;

    var quantity = Number.MAX_VALUE;

    var data = {};
    var unit = "";
    var label = "";
    for (var i = 0; i < props.compArr.length; i++) {
      console.log("quantity" + props.compArr[i].totalNutrients[value].quantity);
      if (quantity > props.compArr[i].totalNutrients[value].quantity) {
        quantity = props.compArr[i].totalNutrients[value].quantity;
        unit = props.compArr[i].totalNutrients[value].unit;
        label = props.compArr[i].totalNutrients[value].label;
        data = props.compArr[i];
      }
    }

    var array = [];
    array.push(data);
    setArr(array);
    setQuantity(quantity);
    setDispalyUnit(unit);
    setDispalyLabel(label);
  };

  return (
    <div>
      <h3>Find out which recipie has the least of the chosen nutrient:</h3>
      <select
        id="selectNutri"
        variant="primary"
        class="nutrient-select mb-4 form-select-lg"
        onChange={onChange}
      >
        <option value="NA">Sodium</option>
        <option value="SUGAR">Sugar</option>
        <option value="PROCNT">Protein</option>
        <option value="FAT">Fat</option>
      </select>

      <h1>Nutrient Comparison:</h1>
      {arr.map((obj) => {
        return (
          <div class="col-6 col-md-4 p-3">
            <div class="card p-4 text-center">
              <div class=" flex-row ">
                <PrintFood recipe={obj} />

                <div>
                  {displayLabel}: {Math.round(displayQuantity * 1000) / 1000}
                  {displayUnit}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
