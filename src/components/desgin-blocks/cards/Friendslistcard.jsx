import React from "react";
import image from "../../media/me.jpg";

function Friendslistcard({ data }) {
  return (
    <div className="col-md-6 col-12 px-lg-2 py-lg-3 py-2">
      <div className="card bg-blacks border-0 shadow   rounded-4 border-0">
        <div className="card-body p-0 ">
          <img
            src="https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="img-fluid hiegth"
          />
        </div>
      </div>
      <div className="card bg-blacks border-0 shadow   rounded-0 pb-3 ">
        <div class="card-header text-light display-6 py-md-2 py-2  border-0">
          <div className="row m-0 justify-content-start text-lg-start text-center">
            <div className=" col-md-3 col-12  teans3 align-self-center">
              <img
                src={data.picturePath}
                alt=""
                className="img-fluid  rounded-2  border-black  pt-2"
              />
            </div>
            <div className="pt-2 col-9 col-12  text-start align-self-center">
              <div className="fw-lighta fs-2 text-purple ">Paul Molive</div>
              <p className="fs-6 fw-lighta p-0 m-0 opacity-75 small">
                orem Ipsum is simply dummy text of the orem Ipsum is simply
                dummy text of the
              </p>
              <div className="fs-6 ps-1 pt-1 fw-lighta">50 Friends</div>
              <div className="fs-6 ps-1 pt-1 fw-lighta">@developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Friendslistcard;
