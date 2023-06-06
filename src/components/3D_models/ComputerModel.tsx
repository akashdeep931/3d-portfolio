import { useGLTF } from "@react-three/drei";

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
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isSmallMobile ? 0.9 : 1}
        position={
          isSmallMobile
            ? [0, -2.5, -1.3]
            : isBigMobile
            ? [0, -2, -1.7]
            : [0, -1.5, -1.7]
        }
        rotation={[-0.01, -0.2, -0.2]}
      />
    </mesh>
  );
};

export default ComputerModel;
