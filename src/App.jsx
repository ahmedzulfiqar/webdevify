import "./App.css";
import "./index.css";
import Appcover from "./components/covers/Appcover";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Loader from "./components/desgin-blocks/Loader";

function App() {
  const [complete, setcomplete] = useState(true);
  const [theme, settheme] = useState("blue");
  useEffect(() => {
    setTimeout(() => {
      setcomplete(!true);
    }, 5000);
  }, []);
  const location = useLocation();
  return (
    <div className="App" data-theme={theme}>
      <Routes>
        <Route path="/webdevify/login" element={<Login />} />
        <Route path="/webdevify/signup" element={<Signup />} />
      </Routes>

      {location.pathname !== "/webdevify/login" &&
        location.pathname !== "/webdevify/signup" && (
          <Appcover>
            {complete ? (
              <div className="row mbn  m-0">
                <Loader />
              </div>
            ) : (
              <Home settheme={settheme} />
            )}
          </Appcover>
        )}
    </div>
  );
}

export default App;

/*
****************** TODO **************************
1. do contribution github
2. build chat app
3. complete facebook first
4. canva work
5. sql learn
6. find clients
7. github readme add
8. Canva post js like saved insta
9. Add a readme file to my webdevify
10. showcase my clone on social
*/
