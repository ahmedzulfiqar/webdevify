import React from "react";
import profile from "../../media/me.jpg";
function Profile({ data }) {
  return (
    <div class="d-flex flex-start align-items-center mx-auto mb-3">
      <img
        class="rounded-2 mynavbarimg shadow-1-strong me-3"
        src={
          data.picturePath
            ? data.picturePath
            : "https://th.bing.com/th?id=OIP.Zfx5f4eIZssg5M4BOllj_wD6D6&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        }
        alt="avatar"
      />
      <div>
        <h6 class="fw-lighta text-light mb-1 small ">
          {data.name.toUpperCase()}
        </h6>
        <p class="text-purple fw-lighta small mb-0">
          {data.friends && data.friends.length} Friends
        </p>
      </div>
    </div>
  );
}

export default Profile;
