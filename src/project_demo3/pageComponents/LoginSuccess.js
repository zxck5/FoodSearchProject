import React from "react";

export function LoginSuccess(props) {
  return (
    <div className="p-4">
      <div className="p-5 shadow rounder border">
        <div class="row justify-content-center h1">
          Welcome {props.curUser.fn} {props.curUser.ln}
        </div>
      </div>
    </div>
  );
}
