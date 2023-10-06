import React from "react";
import Authcover from "../components/covers/Authcover";
function Login() {
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
              />
            </div>

            <div class=" mb-4">
              <input
                type="email"
                className="w-100 rounded-1 b text-light py-2 fw-lighta px-3 bg-transparent border-purple"
                placeholder="Password"
              />
            </div>

            <div class="text-center mb-4 mt-1 d-flex">
              <button
                class="btn btn-primary d-grid w-100 align-self-center  gradient-custom-2 border-0 rounded-3 shadow mb-3"
                type="button"
              >
                Log In
              </button>
            </div>

            <div class=" align-items-center justify-content-center pb-4">
              <p class="mb-0 me-2 fw-lighta">Don't have an account?</p>
              <button
                type="button"
                class="btn d-grid  w-100 btn-primary gradient-custom-2 rounded-3 mt-3 "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </Authcover>
  );
}

export default Login;
