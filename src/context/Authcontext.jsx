import { createContext, useEffect, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import Loader from "../components/desgin-blocks/Loader";
export const AuthContexter = createContext();

export const Authcontext = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loader, setloader] = useState(false);
  const [render, setrender] = useState(false);
  const navigation = useNavigate();
  const api_base = "https://webdevify-backend.onrender.com";
  useEffect(() => {
    const storedToken = localStorage.getItem("jwtToken");
    if (storedToken) {
      setloader(true);
      setToken(storedToken);
      fetch(`${api_base}/user/authenticate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: storedToken }),
      })
        .then(async (response) => {
          const res = await response.json();
          console.log(res);
          setUserData(res);
          setloader(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      navigation("/webdevify/login");
    }
  }, [render]);

  return (
    <>
      <AuthContexter.Provider value={{ userData, setrender, render, api_base }}>
        {children}
      </AuthContexter.Provider>
      {loader && (
        <div className="row mbn  m-0">
          <Loader />
        </div>
      )}
    </>
  );
};
