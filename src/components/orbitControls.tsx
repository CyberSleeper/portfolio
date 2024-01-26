import { useRef, useEffect } from 'react'
import { useFrame, useThree, extend } from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

extend({ OrbitControls });

export default function Controls(props: any) {
  const { camera, gl, invalidate } = useThree();
  const controls = useRef<OrbitControls>();

  useEffect(() => {
    controls.current = new OrbitControls(camera, gl.domElement);
    return () => controls.current?.dispose();
  }, [camera, gl]);

  useFrame(() => controls.current?.update());

  return null
}