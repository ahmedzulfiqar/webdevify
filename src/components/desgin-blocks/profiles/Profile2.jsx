import React, { useContext } from "react";
import profile from "../../media/me.jpg";
import { AuthContexter } from "../../../context/Authcontext";
function Profile2({ data }) {
  const { userData, setrender } = useContext(AuthContexter);
  const confirmreq = async () => {
    try {
      const from = data.email;
      const to = userData && userData.email;
      const response = await fetch("http://localhost:8000/confirmreq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to }),
      });
      const result = await response.json();
     setrender("fvfd")
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const cancelreq = async () => {
    try {
      const from = data.email;
      const to = userData && userData.email;
      const response = await fetch("http://localhost:8000/cancelreq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to }),
      });
      const result = await response.json();
      window.location.reload();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="d-block pb-3 pt-3 border-bottom border-secondary">
      <div class="d-flex flex-start mx-auto ">
        <img
          class="rounded-1 mynavbarimg shadow-1-strong me-3"
          src={
            data.picturePath
              ? data.picturePath
              : "https://th.bing.com/th?id=OIP.fvvg0Bfwct6OyfVzEgMWRAHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          }
          alt="avatar"
        />
        <div>
          <h6 class="fw-bold text-light mb-1 text-uppercase">{data.name}</h6>
          <p className="text-purple small mb-0 fw-lighta">
            {data.friends && data.friends.length} Friends
          </p>
        </div>
      </div>

      <div className="d-flex mt-3 ">
        <div
          className="btn bg-purpleless text-purple fw-lighta btn-sm me-2 w-100"
          onClick={confirmreq}
        >
          Confirm Request
        </div>
        <div
          className="btn bg-secondary text-dark btn-sm w-50"
          onClick={cancelreq}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default Profile2;
