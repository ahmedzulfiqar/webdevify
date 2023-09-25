import React from "react";
import profile from "../media/me.jpg";
function Profile2() {
  return (
    <div className="d-block pb-3 pt-3 border-bottom border-secondary">
      <div class="d-flex flex-start mx-auto ">
        <img
          class="rounded-1 mynavbarimg shadow-1-strong me-3"
          src={profile}
          alt="avatar"
        />
        <div>
          <h6 class="fw-bold text-light mb-1">Ahmed Zulfiqar</h6>
          <p className="text-purple small mb-0 fw-lighta"> has 20 frineds</p>
        </div>
      </div>

      <div className="d-flex mt-3 ">
        <div className="btn bg-purpleless text-purple fw-lighta btn-sm me-1 w-100">
          Confirm Request
        </div>
        <div className="btn bg-secondary text-dark btn-sm w-50">Delete</div>
      </div>
    </div>
  );
}

export default Profile2;
