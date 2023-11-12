import React, { useContext, useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import Postbody from "./Postbody";
import Textpostbody from "./Textpostbody";
import { AuthContexter } from "../../../context/Authcontext";
import Findfriends from "../cards/Findfriends";
function Post() {
  const { userData, setrender, render, api_base } = useContext(AuthContexter);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      fetch(`${api_base}/user/getpost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userData && userData.email }),
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
    <div className="col-12 p-0 mt-md-2 mt-1 ">
      {posts.length > 0 ? (
        posts
          .sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          })
          .map((data, index) => {
            return <Postbody data={data} index={index} />;
          })
      ) : (
        <>
          <div className="card border-0 rounded-0   bg-blacks shadow d-block mt-md-0 h-100">
            <div className="text-purple">
              <Findfriends />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
