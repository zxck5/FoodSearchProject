import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Login = (props) => {
  const [userInfo, setUserInfo] = useState({});

  var navigate = useNavigate();

  const onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(props.memberData);

    validateUserInfo();
  };
  //TODO: validate
  const validateUserInfo = () => {
    let idx = 0;
    var bool = false;

    for (var i = 0; i < props.memberData.length; i++) {
      if (
        props.memberData[i].id === userInfo.id &&
        props.memberData[i].pw === userInfo.pw
      ) {
        bool = true;
        idx = i;
        break;
      }
    }
    if (bool) {
      console.log(idx);
      console.log(props.memberData[idx]);
      props.currentUser(props.memberData[idx]);
      navigate("../../users/login/success");
    }
  };

  return (
    <Container classname="sahdow rounder border p-4">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center mb-5">
          <h2 class="heading-section">Login</h2>
          <div class="">
            <form onSubmit={onSubmit}>
              <input
                class="form-control"
                type="text"
                placeholder="id"
                name="id"
                onChange={onChange}
              />
              <br></br>
              <input
                class="form-control"
                type="text"
                placeholder="password"
                name="pw"
                onChange={onChange}
              />
              <br></br>
              <button
                class="form-control btn btn-primary rounded submit px-3"
                variant={"primary"}
                type={"submit"}
                value={"submit"}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
