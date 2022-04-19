import React from "react";
import { createRoot } from "react-dom/client";
import { Stage, Layer, Rect, Text, Circle, Line } from "react-konva";

const App = () => {
  const moduleWidth = 100;
  const moduleHeight = 100;

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          x={100}
          y={100}
          width={moduleWidth}
          height={moduleHeight}
          fill="red"
          rotation={20}
        />
        <Rect
          x={100 * Math.cos((Math.PI / 180) * 20) + moduleWidth}
          y={100 * Math.sin((Math.PI / 180) * 20) + moduleHeight}
          width={moduleWidth}
          height={moduleWidth}
          fill="green"
          rotation={20}
        />
      </Layer>
    </Stage>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
