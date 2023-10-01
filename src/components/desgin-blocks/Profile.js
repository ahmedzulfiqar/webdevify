import React from "react";
import profile from "../media/me.jpg";
function Profile({ image, name, friends }) {
  return (
    <div class="d-flex flex-start align-items-center mx-auto mb-4">
      <img
        class="rounded-1 mynavbarimg shadow-1-strong me-3"
        src={image}
        alt="avatar"
      />
      <div>
        <h6 class="fw-bold text-light mb-1">{name}</h6>
        <p class="text-purple fw-lighta small mb-0">{friends}</p>
      </div>
    </div>
  );
}

export default Profile;
