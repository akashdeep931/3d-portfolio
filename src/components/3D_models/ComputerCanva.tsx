import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { CanvasLoader, ComputerModel } from ".";

const ComputerCanvas = () => {
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [isBigMobile, setIsBigMobile] = useState(false);

  useEffect((): (() => void) => {
    const smallMediaQuery: MediaQueryList =
      window.matchMedia("(max-width: 650px)");
    const bigMediaQuery: MediaQueryList =
      window.matchMedia("(max-width: 950px)");

    setIsSmallMobile(smallMediaQuery.matches);
    setIsBigMobile(bigMediaQuery.matches);

    const handleScreenSizeChange = (event: MediaQueryListEvent) => {
      setIsSmallMobile(event.matches);
      setIsBigMobile(event.matches);
    };

    smallMediaQuery.addEventListener("change", handleScreenSizeChange);
    bigMediaQuery.addEventListener("change", handleScreenSizeChange);

    return (): void => {
      smallMediaQuery.removeEventListener("change", handleScreenSizeChange);
      bigMediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ComputerModel
          isSmallMobile={isSmallMobile}
          isBigMobile={isBigMobile}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
