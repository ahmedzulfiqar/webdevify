import React from "react";
import Authcover from "../components/covers/Authcover";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

function Signup() {
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
            color: "#ffffffd6",
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
      <div class="col-lg-6 order-lg-1 order-2">
        <div class="card-body p-md-5 mx-md-4">
          <div class="text-center">
            <h4 class="mt-1 pb-1 display-5 text-purple">WEBDEVIFY</h4>
            <h6 class="mt-1 mb-3 pb-1 display-6 fw-lighta text-light">
              Create Your Account
            </h6>
          </div>

          <form>
            <div class=" mb-3">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Name"
                  className="w-100 "
                  type="name"
                  variant="standard"
                />
              </ThemeProvider>
            </div>
            <div class=" mb-3">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Email"
                  className="w-100 "
                  type="email"
                  variant="standard"
                />
              </ThemeProvider>
            </div>
            <div class=" mb-3">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Password"
                  className="w-100 "
                  type="password"
                  variant="standard"
                />
              </ThemeProvider>
            </div>
            <div class=" mb-4">
              <ThemeProvider theme={theme}>
                <TextField
                  label="Confirm Password"
                  className="w-100 "
                  type="password"
                  variant="standard"
                />
              </ThemeProvider>
            </div>

            <div class="text-center mb-4 mt-1 d-flex">
              <button
                class="btn btn-primary d-grid w-100 align-self-center  gradient-custom-2 border-0 rounded-3 shadow mb-3"
                type="button"
              >
                Sign Up
              </button>
            </div>

            <div class=" align-items-center justify-content-center pb-4">
              <p class="mb-0 me-2 fw-lighta">Already have an account?</p>
              <button
                type="button"
                class="btn d-grid  w-100 btn-primary gradient-custom-2 rounded-3 mt-3 "
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </Authcover>
  );
}

export default Signup;
