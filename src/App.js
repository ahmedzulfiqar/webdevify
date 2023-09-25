import "./App.css";
import Routercomp from "./router/Routercomp";
import Appcover from "./components/covers/Appcover";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { LineWave, Triangle } from "react-loader-spinner";
function App() {
  const [complete, setcomplete] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setcomplete(!true);
    }, 1000);
  }, []);
  return (
    <div className="App">
      <Appcover>
        {complete ? (
          <div className="row loader m-0">
            <Triangle
              height="100"
              width="100"
              color="#8755f2"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <Home />
        )}
      </Appcover>
    </div>
  );
}

export default App;
