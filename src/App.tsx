import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ThreeDemoScreen,
  ReactThreeArJsScreen,
  ReactThreeXrScreen,
  GLTFViewerScreen,
} from "@app/screens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GLTFViewerScreen />} />
        <Route path="gltf-viewer" element={<GLTFViewerScreen />} />
        <Route path="three-demo" element={<ThreeDemoScreen />} />
        <Route path="react-three-arjs" element={<ReactThreeArJsScreen />} />
        <Route path="react-three-xr" element={<ReactThreeXrScreen />} />
      </Routes>
    </div>
  );
}

export default App;
