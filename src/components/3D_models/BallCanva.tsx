import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { CanvasLoader, BallModel } from ".";

const BallCanva = ({ icon }: { icon: string }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BallModel imgPath={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanva;
