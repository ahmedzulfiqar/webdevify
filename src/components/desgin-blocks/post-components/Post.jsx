import React, { useContext, useEffect, useState } from "react";
import profile from "../../media/me.jpg";
import Postbody from "./Postbody";
import Textpostbody from "./Textpostbody";
import { AuthContexter } from "../../../context/Authcontext";
function Post() {
  const { userData, setrender, render } = useContext(AuthContexter);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchposts = async () => {
      fetch("http://localhost:8000/user/getpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userData.email }),
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
      {posts.length > 0 &&
        posts.map((data, index) => {
          return <Postbody data={data} index={index} />;
        })}
    </div>
  );
}

export default Post;
