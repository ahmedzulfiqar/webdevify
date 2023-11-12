import React, { useContext, useEffect } from "react";
import Createpost from "../cards/Createpost";
import About from "../cards/About";
import Photoscard from "../cards/Photoscard";
import Friendscard from "../cards/Friendscard";
import Textpostbody from "../post-components/Textpostbody";
import Postbody from "../post-components/Postbody";
import { AuthContexter } from "../../../context/Authcontext";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
function Myprofilebottom() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      fetch(`${api_base}/user/getmypost`, {
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
    <div className="col-lg-11 col-12 p-0 mt-md-3 mt-2">
      <div className="row m-0">
        <div className="col-lg-4 col-12 p-0 pe-lg-3 p-0">
          <About />
          <Photoscard posts={posts} />
          <Friendscard />{" "}
        </div>

        <div className="col-lg-8 col-12 p-0">
          <Createpost />
          {posts.length > 0
            ? posts
                .slice(0)
                .reverse()
                .map((data, index) => {
                  return <Postbody data={data} index={index} />;
                })
            : ""}
        </div>
      </div>
    </div>
  );
}

export default Myprofilebottom;
