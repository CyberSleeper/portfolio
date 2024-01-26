import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree  } from '@react-three/fiber'
import OrbitControls from '@/components/orbitControls'

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += delta))

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Sphere(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

function Light(props: JSX.IntrinsicElements['mesh']) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const canvas = useThree(state => state.gl.domElement)

  useLayoutEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      console.log(x, y)
      console.log(rect.width, rect.height)
      setMouse({ x, y })
    }

    canvas.addEventListener('mousemove', updateMousePosition)

    return () => {
      canvas.removeEventListener('mousemove', updateMousePosition)
    }
  }, [canvas])

  return (
    <mesh>
      <pointLight position={[mouse.x * 5, mouse.y * 5, 2]} intensity={5} />
    </mesh>
  )
}

export default function App() {
  return (
    <div className='min-h-screen w-full'>
      <div className='h-screen w-full top-0 left-0 fixed'>
        <Canvas className='w-full h-screen -z-10'>
          {/* <axesHelper args={[5]} /> */}
          {/* <ambientLight intensity={0.5} /> */}
          <Light />
          {/* <Box position={[-3, 0, 0]} /> */}
          {/* <Box position={[3, 0, 0]} /> */}
          <Sphere position={[0, -2, 0]} />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      <div className='h-screen'>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
        LOREM IPSUM<br/>
      </div>
    </div>
  )
}
