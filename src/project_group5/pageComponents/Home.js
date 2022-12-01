import React from "react";
import Content1 from "../foodComponents/Searchfood";

export function Home(props) {
  return (
    <Content1
      sendFood={props.sendFood}
      handleFood={props.handleFood}
      foodDb={props.foodDb}
      handleInven={props.handleInven}
      curUser={props.curUser} />
  );
}
