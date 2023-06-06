import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { CanvasLoader, BallModel } from ".";

const BallCanva = ({ icon }: { icon: string }) => {
  const [showWebGLComponents, setShowWebGLComponents] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElement: HTMLElement | null =
        document.getElementById("ball-webGL");

      if (sectionElement) {
        const sectionPosition: DOMRect = sectionElement.getBoundingClientRect();
        const isInViewport: boolean =
          sectionPosition.top < window.innerHeight &&
          (sectionPosition.bottom >= 0 || sectionPosition.bottom >= -900);

        setShowWebGLComponents(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showWebGLComponents && (
          <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
              <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <BallModel imgPath={icon} />
            </Suspense>
            <Preload all />
          </Canvas>
        )}
    </>
  );
};

export default BallCanva;
