import React, { useState } from "react";
import Authcover from "../components/covers/Authcover";
import { TextField, ThemeProvider, createTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigation = useNavigate();
  const [error, seterror] = useState();
  const [loader, setloader] = useState(false);
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
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
      inputdata.password.length > 6 &&
      inputdata.name.length > 6
    ) {
      if (inputdata.password !== inputdata.confirmpassword) {
        seterror("Password Should Be Same");
      } else {
        if (checker.test(inputdata.email)) {
          try {
            const response = await fetch("http://localhost:8000/user/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(inputdata),
            });
            console.log(response);
            if (response.ok) {
              console.log(response);
              setTimeout(() => {
                navigation("/webdevify/login");
              },2000);
              seterror("Authentication Successful");
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
      }
    } else {
      seterror("All Fileds Must Containe More Than  Characters");
    }
  };

  const theme = createTheme({
    components: {
      MuiInput: {
        styleOverrides: {
          underline: {
            "&:before": {
              borderBottomColor: "#0a66c2",
            },

            "&:after": {
              borderBottomColor: "#0a66c2",
            },
            "&:hover:before": {
              borderBottomColor: "#0a66c2", // Border color on hover
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: "#fff",
            "&.Mui-focused": {
              color: "#fff",
            },
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          input: {
            color: "#fff", // Change input text color
          },
        },
      },
    },
  });
  return (
    <Authcover>
      <div class="col-lg-6 order-lg-1 order-2 ">
        <div class="card-body p-md-5 mx-md-4">
          <div class="text-center">
            <h4 class="mt-1 pb-1 display-5 text-purple">WEBDEVIFY</h4>
            <h6 class="mt-1 mb-4 pb-1 display-6 fw-lighta text-light">
              Create Your Account
            </h6>
          </div>

          {!loader ? (
            <form>
              <div class=" mb-3">
                <ThemeProvider theme={theme}>
                  <TextField
                    label="Name"
                    className="w-100  fw-lighta"
                    type="name"
                    onChange={handelchange}
                    variant="standard"
                    name="name"
                  />
                </ThemeProvider>
              </div>
              <div class=" mb-3">
                <ThemeProvider theme={theme}>
                  <TextField
                    label="Email"
                    className="w-100 "
                    onChange={handelchange}
                    type="email"
                    name="email"
                    variant="standard"
                  />
                </ThemeProvider>
              </div>
              <div class=" mb-3">
                <ThemeProvider theme={theme}>
                  <TextField
                    onChange={handelchange}
                    label="Password"
                    className="w-100 "
                    name="password"
                    type="password"
                    variant="standard"
                  />
                </ThemeProvider>
              </div>
              <div class=" mb-4">
                <ThemeProvider theme={theme}>
                  <TextField
                    label="Confirm Password"
                    onChange={handelchange}
                    className="w-100 "
                    type="password"
                    name="confirmpassword"
                    variant="standard"
                  />
                </ThemeProvider>
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
              </div>

              <div class="text-center mb-4 mt-1 d-flex">
                <button
                  class="btn btn-primary d-grid w-100 align-self-center  gradient-custom-2 border-0 rounded-3 shadow mb-3"
                  type="button"
                  onClick={submitform}
                >
                  Sign Up
                </button>{" "}
              </div>

              <div class=" align-items-center justify-content-center pb-4">
                <p class="mb-0 me-2 fw-lighta">Already have an account?</p>
                <Link
                  type="button"
                  to="/webdevify/login"
                  class="btn d-grid  w-100 btn-primary gradient-custom-2 rounded-3 mt-3 "
                >
                  Log In
                </Link>
              </div>
            </form>
          ) : (
            <div className="d-flex   justify-content-center">
              <svg
                height="0"
                width="0"
                viewBox="0 0 64 64"
                class="absolute text-center"
              >
                <defs class="" xmlns="http://www.w3.org/2000/svg">
                  <linearGradient
                    class="s-xJBuHA073rTt"
                    gradientUnits="userSpaceOnUse"
                    y2="2"
                    x2="0"
                    y1="62"
                    x1="0"
                    id="b"
                  >
                    <stop class="s-xJBuHA073rTt" stop-color="#973BED"></stop>
                    <stop
                      class="s-xJBuHA073rTt"
                      stop-color="#007CFF"
                      offset="1"
                    ></stop>
                  </linearGradient>
                  <linearGradient
                    class="s-xJBuHA073rTt"
                    gradientUnits="userSpaceOnUse"
                    y2="0"
                    x2="0"
                    y1="64"
                    x1="0"
                    id="c"
                  >
                    <stop class="s-xJBuHA073rTt" stop-color="#FFC800"></stop>
                    <stop
                      class="s-xJBuHA073rTt"
                      stop-color="#F0F"
                      offset="1"
                    ></stop>
                    <animateTransform
                      repeatCount="indefinite"
                      keySplines=".42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1"
                      keyTimes="0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1"
                      dur="8s"
                      values="0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32"
                      type="rotate"
                      attributeName="gradientTransform"
                    ></animateTransform>
                  </linearGradient>
                  <linearGradient
                    class="s-xJBuHA073rTt"
                    gradientUnits="userSpaceOnUse"
                    y2="2"
                    x2="0"
                    y1="62"
                    x1="0"
                    id="d"
                  >
                    <stop class="s-xJBuHA073rTt" stop-color="#00E0ED"></stop>
                    <stop
                      class="s-xJBuHA073rTt"
                      stop-color="#00DA72"
                      offset="1"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 64"
                height="64"
                width="64"
                class="inline-block"
              >
                <path
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="10"
                  stroke="url(#c)"
                  d="M 32 32 m 0 -27a 27 27 0 1 1 0 54 a 27 27 0 1 1 0 -54"
                  class="spin"
                  id="o"
                  pathLength="3260"
                ></path>
              </svg>
              <div class="w-2"></div>
            </div>
          )}
        </div>
      </div>
    </Authcover>
  );
}

export default Signup;
