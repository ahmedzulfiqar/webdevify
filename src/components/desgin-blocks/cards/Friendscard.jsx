import React, { useContext, useEffect, useState } from "react";
import image from "../../media/me.jpg";
import { AuthContexter } from "../../../context/Authcontext";
import Profile from "../profiles/Profile";
function Freindscard() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    const getfriends = async () => {
      try {
        const userId = (await userData) && userData._id;
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
      <div className=" p-0 m-0 py-0 mt-2 border-0">
        <div class="card-footer  border-0 py-md-1  py-1 px-4  my-1">
          {friends.length > 0 ? (
            friends.map((i) => {
              return <Profile data={i} />;
            })
          ) : (
            <h1 className="fw-lighta fs-3 text-danger">Not Found</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Freindscard;
