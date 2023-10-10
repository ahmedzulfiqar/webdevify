import React, { useState } from "react";
import Authcover from "../components/covers/Authcover";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigation = useNavigate();
  const [error, seterror] = useState();
  const [loader, setloader] = useState(false);
  const [inputdata, setinputdata] = useState({
    email: "",
    password: "",
  });
  const handelchange = (e) => {
    setinputdata({
      ...inputdata,
      [e.target.name]: e.target.value,
    });
    console.log(inputdata);
  };
  const submitform = async (e) => {
    e.preventDefault();
    seterror("");
    let checker =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (
      inputdata &&
      inputdata.email.length > 6 &&
      inputdata.password.length > 6
    ) {
      if (checker.test(inputdata.email)) {
        try {
          const response = await fetch("http://localhost:8000/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(inputdata),
          });
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem("jwtToken", data.token);
            seterror("Authentication Successful");
            setTimeout(() => {
              navigation("/webdevify/");
            },2000);
          } else {
            const responseData = await response.json();
            seterror(responseData.message);
          }
        } catch (error) {
          seterror("Error:", error);
        }
      } else {
        seterror("Email Is Not In Correct Format");
      }
    } else {
      seterror("All Fileds Must Containe More Than  Characters");
    }
  };
  return (
    <Authcover>
      <div class="col-lg-6 order-lg-1 order-2">
        <div class="card-body p-md-5 mx-md-4">
          <div class="text-center">
            <h4 class="mt-1 mb-5 pb-1 display-5 text-purple">WEBDEVIFY</h4>
          </div>

          <form>
            <p className="fw-lighta">Please login to your account</p>

            <div class=" mb-3">
              <input
                type="email"
                className="w-100 rounded-1 b text-light py-2 fw-lighta px-3 bg-transparent border-purple"
                placeholder="email address"
                name="email"
                onChange={handelchange}
              />
            </div>

            <div class=" mb-4">
              <input
                type="email"
                className="w-100 rounded-1 b text-light py-2 fw-lighta px-3 bg-transparent border-purple"
                name="password"
                placeholder="Password"
                onChange={handelchange}
              />
            </div>
            {error && (
              <div
                className={`fs-6 fw-lighta ${
                  error !== "Authentication Successful"
                    ? "text-danger"
                    : "text-success"
                } my-3`}
              >
                {error !== "Authentication Successful" ? (
                  <i
                    class="fa fa-exclamation-circle pe-2"
                    aria-hidden="true"
                  ></i>
                ) : (
                  <i class="fa fa-check-circle pe-2" aria-hidden="true"></i>
                )}
                {error}
              </div>
            )}
            <div class="text-center mb-4 mt-1 d-flex">
              <button
                class="btn btn-primary d-grid w-100 align-self-center  gradient-custom-2 border-0 rounded-3 shadow mb-3"
                type="button"
                onClick={submitform}
              >
                Log In
              </button>
            </div>

            <div class=" align-items-center justify-content-center pb-4">
              <p class="mb-0 me-2 fw-lighta">Don't have an account?</p>
              <Link
                type="button"
                class="btn d-grid  w-100 btn-primary gradient-custom-2 rounded-3 mt-3 "
                to={"/webdevify/signup"}
              >
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Authcover>
  );
}

export default Login;
