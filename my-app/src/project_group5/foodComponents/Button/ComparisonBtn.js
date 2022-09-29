import { useNavigate } from "react-router-dom";

export default function ComparisonBtn(props) {
  var navigate = useNavigate();

  var comparisonbtn;
  const onClick = () => {
    props.sendCompArr(props.arr2);
    navigate("../../users/myRecipe/comparison");
  };

  if (props.arr.length === 0) {
    comparisonbtn = <div></div>;
  } else {
    comparisonbtn = (
      <input
        class="btn btn-secondary btn-lg"
        type="submit"
        value="Click to compare checked recipies"
        onClick={onClick}
      />
    );
  }

  return <div>{comparisonbtn}</div>;
}
