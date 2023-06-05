import { Decal, useTexture } from "@react-three/drei";

const BallModel = ({ imgPath }: { imgPath: string }) => {
  const [decal] = useTexture([imgPath]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <directionalLight position={[0, 0, 0]} />
      <ambientLight intensity={1} />
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#E7F6F2"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        flatShading
        map={decal}
      />
      <Decal
        position={[0, 0, -1]}
        rotation={[2 * Math.PI, 3, 6.25]}
        flatShading
        map={decal}
      />
    </mesh>
  );
};

export default BallModel;
