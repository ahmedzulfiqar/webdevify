import React, { useContext, useState } from "react";
import { AuthContexter } from "../../../context/Authcontext";

function Birthdayprofile({ data }) {
  const { userData, setrender } = useContext(AuthContexter);
  const sendrequest = async () => {
    try {
      const from = userData && userData.email;
      const to = data.email;

      const response = await fetch("http://localhost:8000/sendreq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ from, to }),
      });
      const result = await response.json();
      console.log(result);
      if (result.acknowledged == true) {
        setrender("ds");
      } else {
        alert("Error in sending request");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div class="d-flex flex-start align-items-center mx-auto mb-4 justify-content-between">
      <div className="m-0 d-flex p-0">
        <img
          class="rounded-1 mynavbarimg shadow-1-strong me-3"
          src={
            data.picturePath
              ? data.picturePath
              : "https://th.bing.com/th?id=OIP.Zfx5f4eIZssg5M4BOllj_wD6D6&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          }
          alt="avatar"
        />
        <div>
          <h6 class="fw-bold text-light mb-1">{data.name}</h6>
          <p class="text-purple small  mb-0 fw-lighta">
            {data.friends.length} Friends
          </p>
        </div>
      </div>
      <div className="d-block">
        <i class="fa-solid fa-plus text-purple" onClick={sendrequest}></i>
      </div>
    </div>
  );
}

export default Birthdayprofile;
