import React, { useState } from "react";

export default function Check(props) {
  // const [checked, setChecked] = useState(false);

  const onChange = (e) => {
    // setChecked(e.currentTarget.checked);

    var bool = e.target.checked;
    console.log("bool is working =======" + bool);
    if (bool) {
      // var data = props.recipe;

      // props.passObj({ ...data, mark: 1 });
      props.passObj(props.recipe);
      // console.log("obj=" + { ...data, mark: 1 });
    } else {
      // var data = props.recipe;
      // props.clickAgain({ ...data, mark: 1 });
      props.clickAgain(props.recipe);
    }
  };

  return (
    <input
      type="checkbox"
      style={{ width: "30px", height: "20px" }}
      onChange={onChange}
    />
  );

  // <div>

  // </div>
}
