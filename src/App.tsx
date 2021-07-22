
import React from "react";
import PlasmicSidebar from "./components/plasmic/fire_spot/PlasmicSidebar";
import {Map} from "./components/GoogleMap";

function Index() {
  return (
    <div>
      <div style={{padding: "0px", alignContent: "center", display: "inline"}}>
        <PlasmicSidebar/>
      </div>
      <div style={{  padding: "100px", alignContent: "center", display: "inline"}}>
        <Map/>
    </div>
   </div>
   
  );
}

export default Index;
  