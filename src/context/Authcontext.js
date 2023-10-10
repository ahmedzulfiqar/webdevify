import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContexter = createContext();

export const Authcontext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [render, setrender] = useState("23");
  const api_base = "http://localhost:8000";
  const navigate = useNavigate();

  useEffect(() => {
    fether();
  }, [render]);
  const fether = () => {
    fetch(api_base + "/activeuser")
      .then((res) => res.json())
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.error("Error: ", err));
  };
  return (
    <AuthContexter.Provider value={{ currentUser, api_base, setrender }}>
      {children}
    </AuthContexter.Provider>
  );
};
