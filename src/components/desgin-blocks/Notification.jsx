import React, { useContext, useEffect, useState } from "react";
import Profile2 from "./profiles/Profile2";
import { AuthContexter } from "../../context/Authcontext";
function Notifications() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);
  const [notifiactions, setnotifiactions] = useState([]);
  useEffect(() => {
    const confirmreq = async () => {
      try {
        const userId = await userData._id;
        const response = await fetch(`${api_base}/getrequests`, {
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
        <div class="card-header fw-lighta text-light fs-3 py-md-2 py-2 border-0 rounded-0 ">
          Notification
        </div>

        <div className=" p-0 m-0 py-0 mt-0">
          <div class="card-footer   py-md-1  py-1 px-4 myfriendsscrol my-1">
            {notifiactions.length > 0 ? (
              notifiactions.map((i) => {
                return <Profile2 data={i} />;
              })
            ) : (
              <h1 className="fw-lighta fs-3 text-danger">Not Found</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
