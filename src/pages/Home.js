import React, { useState } from "react";
import Homecover from "../components/covers/Homecover";
import Navbar from "../components/desgin-blocks/Navbar";
import Sidebarcomp from "../components/desgin-blocks/Sidebarcomp";
function Home() {
  const [open, setopen] = useState(false);
  return (
    <Homecover>
      <Navbar setopen={setopen} open={open} />
      <Sidebarcomp open={open} />
      <div className="absolute">a</div>
    </Homecover>
  );
}

export default Home;
