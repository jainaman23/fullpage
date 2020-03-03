import React from "react";
import Fullpage from "./Fullpage/Fullpage";

function App() {
  return (
    <Fullpage>
      <Fullpage.Slide>
        <div className="1">HI</div>
      </Fullpage.Slide>
      <Fullpage.Slide>
        <div className="2">Hello</div>
      </Fullpage.Slide>
      <Fullpage.Slide>
        <div className="3">Here</div>
      </Fullpage.Slide>
      <Fullpage.Slide>
        <div className="4">Heyyy</div>
      </Fullpage.Slide>
    </Fullpage>
  );
}

export default App;
