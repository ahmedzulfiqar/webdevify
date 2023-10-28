import React, { useContext, useEffect, useState } from "react";
import image from "../../media/me.jpg";
import { AuthContexter } from "../../../context/Authcontext";
function Freindscard() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    const getfriends = async () => {
      try {
        const userId = await userData._id;
        const response = await fetch(`${api_base}/user/friends`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const result = await response.json();
        setfriends(result.response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getfriends();
  }, [render]);
  return (
    <div className="card bg-blacks rounded-1 shadow px-md-0 mb-3">
      <div class="card-header text-light fs-3 fw-lighta py-md-2 py-2 ps-4 border-bottom border-dark border-2 d-block">
        Friends
      </div>
      <div className="card-header py-3 px-3">
        <div className="row m-0 justify-content-start">
          {friends.map((i, index) => {
            return (
              <>
                <div className="col-4   pb-2">
                  <img
                    src={i.picturePath}
                    alt=""
                    className="img-fluid rounded-1 p-md-0 p-1"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Freindscard;
