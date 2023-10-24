import React, { useContext, useEffect, useState } from "react";
import Profile2 from "./profiles/Profile2";
import { AuthContexter } from "../../context/Authcontext";
function Notifications() {
  const { userData, setrender ,render } = useContext(AuthContexter);
  const [notifiactions, setnotifiactions] = useState([]);
  useEffect(() => {
    const confirmreq = async () => {
      try {
        const userId = await userData._id;
        const response = await fetch("http://localhost:8000/getrequests", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const result = await response.json();
        setnotifiactions(result.response);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    confirmreq();
  }, [render]);
  return (
    <div className="col-12 p-0">
      <div className="card border-0 rounded-0  myfriends bg-blacks shadow d-block">
        <div class="card-header text-light fs-3  py-md-2 py-2  b rounded-0">
          <i class="fa-solid fa-bell text-purple  me-2" aria-hidden="true"></i>{" "}
          Notification
        </div>

        <div className=" p-0 m-0 py-0 mt-0">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-1">
            {notifiactions.length > 0 ?(
              notifiactions.map((i) => {
                return <Profile2 data={i} />;
              })
            ) : (
              <h1 className="fw-lighta fs-3 text-danger">
                <i class="fa-regular fa-face-frown pe-2"></i>Not Found
              </h1>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
