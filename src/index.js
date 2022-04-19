import React, {useEffect, useRef, useState} from "react";
import {createRoot} from "react-dom/client";
import {Stage, Layer, Rect, Text, Circle, Line, Transformer} from "react-konva";

const App = () => {
    const moduleWidth = 200
    const moduleHeight = 100

    const redRef = useRef()
    const greenRef = useRef()

    const [debugText, setDebugText] = useState('')
    const [redPos, setRedPos] = useState(null)

    useEffect(() => {
        setDebugText(redPos)
    }, [redPos])

    useEffect (() => onRedMove(), [])

    const onRedMove = () => {
        setRedPos(redRef.current.getTransform().point({
            x: redRef.current.width(),
            y: 0
        }))
    }


    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Text text={JSON.stringify(debugText, null, 2)}
                      x={50}
                      y={300}
                />

                <Rect
                    x={100}
                    y={100}
                    width={moduleWidth}
                    height={moduleHeight}
                    fill="red"
                    rotation={20}
                    ref={redRef}
                    draggable={true}
                    onDragMove={onRedMove}
                    onTransform={onRedMove}
                />
                {redPos && <>
                    <Rect
                        x={redPos?.x ?? 0}
                        y={redPos?.y ?? 0}
                        width={moduleWidth}
                        height={moduleHeight}
                        fill="green"
                        rotation={redRef.current.getRotation()}
                        ref={greenRef}
                    />
                    <Transformer
                        nodes={[redRef?.current]}
                        resizeEnabled={false}
                        rotationSnaps={[0,45,90,135,180, 225, 270, 315]}
                        rotationSnapTolerance={10}
                    />
                    <Circle
                        x={redPos?.x ?? 0}
                        y={redPos?.y ?? 0}
                        radius={10}
                        fill="black"
                        stroke="yellow"
                    />
                </>}

            </Layer>
        </Stage>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
