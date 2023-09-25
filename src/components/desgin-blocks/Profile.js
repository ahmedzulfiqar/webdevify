import React from "react";
import profile from "../media/me.jpg";
function Profile() {
  return (
    <div class="d-flex flex-start align-items-center mx-auto mb-4">
      <img
        class="rounded-1 mynavbarimg shadow-1-strong me-3"
        src={profile}
        alt="avatar"
      />
      <div>
        <h6 class="fw-bold text-light mb-1">Lily Coleman</h6>
        <p class="text-purple small mb-0">2 mutual friends</p>
      </div>
    </div>
  );
}

export default Profile;
