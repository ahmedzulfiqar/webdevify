import React from "react";
import profile from "../../media/me.jpg";
function Profiletop() {
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
                src={profile}
                alt=""
                className="img-fluid  rounded-circle border-black  pt-0"
              />
            </div>
            <div className="pt-2 col-lg-5 col-12">
              <div className="display-6">Ahmed Zulfiqar</div>
              <div className="fs-6 ps-1 pt-1 muted">250 Friends</div>
            </div>
            <div className="col-lg-4 col-12  text-lg-end text-center align-self-center d-flex justify-content-center d-lg-block d-none">
              <div className="btn border-purple text-purple btn-small ">
                <i
                  class="fa fa-pen-to-square text-purple pe-2"
                  aria-hidden="true"
                ></i>
                Edit Profile
              </div>
              <div className="btn border-purple bg-purple text-dark ms-2">
                <i class="fa fa-plus text-dark pe-2" aria-hidden="true"></i>
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
