import { PointMaterial, Points } from "@react-three/drei";
import { Ref, useRef } from "react";
import {
  BufferGeometry,
  Material,
  NormalBufferAttributes,
  Points as TypePoint,
} from "three";
import * as random from "maath/random/dist/maath-random.cjs";
import { RootState, useFrame } from "@react-three/fiber";

type MyRefType = Ref<
  TypePoint<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
> | null;

const StarsModel = () => {
  const ref: MyRefType = useRef(null);
  const sphere = Float32Array.from(
    random.inSphere(new Float32Array(6000), { radius: 1 })
  );

  useFrame((_state: RootState, delta: number) => {
    ref.current!.rotation.x -= delta / 10;
    ref.current!.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default StarsModel;
