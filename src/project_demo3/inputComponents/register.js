import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { ErrorInput } from "./ErrorInput";

const Register = (props) => {
  const [userInfo, setUserInfo] = useState({});
  var navigate = useNavigate();
  const [err, setErr] = useState({});


  const onChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });

  };

  const validateInfo = () => {
    if (props.memberData.length > 0) {
      if (binarySearch(0, props.memberData.length - 1, userInfo.id, "id")) {
        err.errorMessage = "duplicate id!";
        return false;
      }
    }
    if (!userInfo.id) {
      err.errorMessage = "type your id!";
      return false;
    }

    if (!userInfo.pw) {
      err.errorMessage = "type your password!";
      return false;
    }

    return true;

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


  const onSubmit = (e) => {
    e.preventDefault();
    var bool = false;

    if (validateInfo()) bool = true;

    if (bool) {
      props.onCreate(userInfo);
      setErr({ ...err, type : "register", bool: true })
      setTimeout(() => {
        navigate("/users/register/success");
      }, 1500);
    } else {
      setErr({ ...err, type : "register", bool: false });
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

        <ErrorInput err={err} />
      </Container>
    </section>
  );
};
export default Register;
