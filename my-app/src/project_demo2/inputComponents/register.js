import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Register = (props) => {
  const [userInfo, setUserInfo] = useState({});
  var navigate = useNavigate();

  const onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const validateInfo = (value) => {
    alert("register validation");

    if (binarySearch(0, props.memberData.length - 1, value, "id")) {
      alert("duplicate id");
      return false;
    } else {
      alert("ok");
      return true;
    }
  };
  const binarySearch = (left, right, value, type) => {
    var memberData = props.memberData.sort(function (a, b) {
      return a[type] - b[type];
    });
    var result = left;
    while (left <= right) {
      var mid = parseInt((left + right) / 2);
      if (memberData[mid].id < value) {
        left = mid + 1;
      } else {
        right = mid - 1;
        result = mid;
      }
    }
    return value === memberData[result].id;
  };

  // useEffect()

  const onSubmit = (e) => {
    e.preventDefault();
    var bool = true;

    alert("submit!");
    console.log(props.memberData.length);
    if (props.memberData.length > 0) {
      if (!validateInfo(userInfo.id)) bool = false;
    }
    if (bool) {
      alert("fn:" + userInfo.fn + "welcome");
      props.onCreate(userInfo);
      navigate("/users/register/success");
    }
  };

  return (
    <section class="ftco-section p-4">
      <Container className="shadow rounder border p-4">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Sign Up</h2>
            <div class="row justify-content-center">
              <div class="wrap">
                <div class="d-flex"></div>

                <form method="get" onSubmit={onSubmit} class="signin-form">
                  {/* <h1>
                    {userInfo.fn} || {userInfo.ln} || {userInfo.id} ||{" "}
                    {userInfo.pw} || {userInfo.em}{" "}
                  </h1> */}
                  <br></br>

                  <div class="row">
                    <div class="col">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="first name"
                        name="fn"
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div class="col">
                      <input
                        class="form-control"
                        type="text"
                        placeholder="last name"
                        name="ln"
                        onChange={onChange}
                      />
                    </div>
                  </div>

                  <br></br>

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
                    placeholder="passwword"
                    name="pw"
                    onChange={onChange}
                  />
                  <br></br>
                  <input
                    class="form-control"
                    type="text"
                    placeholder="email address"
                    name="em"
                    onChange={onChange}
                  />
                  <br></br>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Register;
