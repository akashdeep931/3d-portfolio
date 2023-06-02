import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { CanvasLoader } from "./";

const ComputerModel = ({
  isSmallMobile,
  isBigMobile,
}: {
  isSmallMobile: boolean;
  isBigMobile: boolean;
}) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight
        intensity={3}
        position={
          isSmallMobile ? [0, 1.5, 1.8] : isBigMobile ? [0, 2.3, 0] : [0, 3, 0]
        }
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensisty={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isSmallMobile ? 0.9 : isBigMobile ? 1 : 1}
        position={
          isSmallMobile
            ? [0, -2, -1]
            : isBigMobile
            ? [0, -2, -1.7]
            : [0, -1.5, -1.7]
        }
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

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
  }, [isSmallMobile]);

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
