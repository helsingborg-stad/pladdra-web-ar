import React from "react";
import GLTF_BARNENS_H22 from "@assets/barnens_h22.glb";
import { ModelViewer } from "@app/components";

function GLTFViewerScreen() {
  return (
    <div>
      <h2>GLTFViewerScreen</h2>
      <div style={{ position: "relative", width: 800, height: 800 }}>
        <ModelViewer scale={40} modelPath={GLTF_BARNENS_H22} />
      </div>
    </div>
  );
}

export default GLTFViewerScreen;
