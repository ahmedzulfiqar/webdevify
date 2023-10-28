import React, { useContext, useEffect, useState } from "react";
import Postbodyclone from "../post-components/Postbodyclone";
import { AuthContexter } from "../../../context/Authcontext";
function Likedposts() {
  const { userData, setrender, render,api_base } = useContext(AuthContexter);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      fetch(`${api_base}/user/getpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userData&&userData.email }),
      })
        .then((response) => {
          if (!response.ok) {
            console.log(response);
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchposts();
  }, [render]);
  return (
    <div className="col-12  p-0 mt-2 ">
      <div className="card rounded-1 bg-blacks shadow d-block  ">
        <div class="card-header text-light fs-3 fw-lighta py-md-2 py-0 border-0 d-block ">
          Popular Posts
        </div>
        <hr className="m-0 p-0 opacity-25" />

        <div className=" p-0 m-0 py-3 ">
          <div class="card-footer py-md-1   px-2   setfindfriends2">
            {posts.length > 0 &&
              posts
                .sort((a, b) => b.likes.length - a.likes.length)
                .map((data, index) => {
                  console.log(data)
                  return <Postbodyclone data={data} />;
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Likedposts;
