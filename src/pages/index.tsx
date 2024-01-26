import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import ThemeContext from '@/components/contexts/ThemeContext'
import OrbitControls from '@/components/orbitControls'



interface Animate {
  horizontal?: boolean
  speed: number
  delta: { x: number, y: number, z: number }
}

function Box(props: JSX.IntrinsicElements['mesh'] & Animate) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state) => {
    ref.current.rotation.x += props.delta.x
    ref.current.rotation.y += props.delta.y
    ref.current.rotation.z += props.delta.z
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * props.speed) 
  })


  return (
    <mesh
      scale={clicked ? 1.5 : 1}
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? '#A9997A' : '#BBBCBD'} />
    </mesh>
  )
}

function Tetra(props: JSX.IntrinsicElements['mesh'] & Animate) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state) => {
    ref.current.rotation.x += props.delta.x
    ref.current.rotation.y += props.delta.y
    ref.current.rotation.z += props.delta.z
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * props.speed) 
  })


  return (
    <mesh
      scale={clicked ? 1.5 : 1}
      {...props}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={hovered ? '#A9997A' : '#BBBCBD'} />
    </mesh>
  )
}

function Sphere(props: JSX.IntrinsicElements['mesh'] & Animate) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    ref.current.rotation.x += props.delta.x
    ref.current.rotation.y += props.delta.y
    ref.current.rotation.z += props.delta.z
    ref.current.position.y = Math.sin(state.clock.getElapsedTime() * props.speed)
  })
  
  return (
    <mesh
      {...props}
      ref={ref}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={'#BBBCBD'} />
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
  const { dark, toggle } = React.useContext(ThemeContext);
  return (
    <div className='min-h-screen w-full bg-light-background dark:bg-dark-background'>
      <div className='h-screen w-full top-0 left-0 fixed'>
        <Canvas className='w-full h-screen'>
          {/* <axesHelper args={[5]} /> */}
          {/* <ambientLight intensity={0.5} /> */}
          <Light />
          <Box position={[3.2, 0, 1]} scale={0.5} speed={1} delta={{ x: 0, y: 0.01, z: 0 }} />
          <Tetra position={[3, 0, -1]} scale={0.6} speed={1.4} delta={{ x: -0.01, y: 0, z: 0 }} />
          <Sphere position={[3.5, -2, 0]} scale={0.3} speed={0.8} delta={{ x: 0, y: 0, z: 0 }} />
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      <div>
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
