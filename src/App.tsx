import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  ThreeDemoScreen,
  ReactThreeArJsScreen,
  ReactThreeXrScreen,
  CustomModelViewerScreen,
} from "@app/screens";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CustomModelViewerScreen />} />
        <Route path="custom-viewer" element={<CustomModelViewerScreen />} />
        <Route path="three-demo" element={<ThreeDemoScreen />} />
        <Route path="react-three-arjs" element={<ReactThreeArJsScreen />} />
        <Route path="react-three-xr" element={<ReactThreeXrScreen />} />
      </Routes>
    </div>
  );
}

export default App;
