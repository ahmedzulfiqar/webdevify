import React, { useContext, useEffect, useState } from "react";
import Profile from "../profiles/Profile";
import profile from "../../media/me.jpg";
import { AuthContexter } from "../../../context/Authcontext";
function Myfriends() {
  const { userData, setrender , render} = useContext(AuthContexter);
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    const getfriends = async () => {
      try {
        const userId = await userData._id;
        const response = await fetch("http://localhost:8000/user/friends", {
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
    <div className="col-12 p-0">
      <div className="card border-0 rounded-0  myfriends bg-blacks shadow d-block mt-md-0">
        <div class="card-header text-light fs-3 py-md-2 py-2  rounded-0 ">
          <i
            class="fa-solid fa-user-group text-purple me-2"
            aria-hidden="true"
          ></i>{" "}
          My Friends
        </div>

        <div className=" p-0 m-0 py-0 mt-3">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-1">
            {friends.length > 0 ? (
              friends.map((i) => {
                return <Profile data={i} />;
              })
            ) : (
              <h1 className="fw-lighta fs-3 text-danger"><i class="fa-regular fa-face-frown pe-2"></i>Not Found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myfriends;
