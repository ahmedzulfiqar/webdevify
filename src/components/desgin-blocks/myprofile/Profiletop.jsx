import React, { useContext } from "react";
import profile from "../../media/me.jpg";
import { AuthContexter } from "../../../context/Authcontext";
function Profiletop() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  return (
    <div className="col-lg-11 col-12  p-0 ">
      <div className="card bg-blacks border-0 shadow  over rounded-1 border-0">
        <div className="card-body p-0 ">
          <img
            src="https://images.unsplash.com/photo-1682397970206-f89f28e8bbf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="img- cover"
          />
        </div>
      </div>
      <div className="card bg-blacks border-0 shadow  teans rounded-0 pb-3 ">
        <div class="card-header text-light display-6 py-md-2 py-2  border-0">
          <div className="row m-0 justify-content-between text-lg-start text-center">
            <div className=" col-lg-3 col-12 ">
              <img
                src={userData&& userData.picturePath}
                alt=""
                className="img-fluid  rounded-circle border-black  p-0 pt-0"
              />
            </div>
            <div className="pt-2 col-lg-5 col-12">
              <div className="fs-3 text-uppercase">{userData&&userData.name}</div>
              <div className="fs-6 pt-2 muted">{userData&&userData.friends.length} Friends</div>
            </div>
            <div className="col-lg-4 col-12  text-lg-end text-center align-self-center d-flex justify-content-center d-lg-block d-none">
              <div className="btn border-purple text-purple btn-small ">
                Edit Profile
              </div>
              <div className="btn border-purple bg-purple text-black ms-2">
                Add A Post
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profiletop;
