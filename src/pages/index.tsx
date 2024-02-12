import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState, useLayoutEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import ThemeContext from '@/contexts/ThemeContext'
import OrbitControls from '@/components/orbitControls'
import { useMediaQuery } from 'react-responsive';
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'

interface objProps {
  horizontal?: boolean
  speed: number
  delta: { x: number, y: number, z: number }
  color: string
}

function Box(props: JSX.IntrinsicElements['mesh'] & objProps) {
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
      castShadow={true}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

function Tetra(props: JSX.IntrinsicElements['mesh'] & objProps) {
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
      castShadow={true}
    >
      <tetrahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  )
}

function Sphere(props: JSX.IntrinsicElements['mesh'] & objProps) {
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
      castShadow={true}
    >
      <capsuleGeometry args={[0.5, 1, 32, 32]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
    // <mesh
    //   {...props}
    //   ref={ref}
    //   castShadow={true}
    // >
    //   <sphereGeometry args={[1, 32, 32]} />
    //   <meshStandardMaterial color={props.color} />
    // </mesh>
  )
}

function Light(props: JSX.IntrinsicElements['mesh']) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = window.document.body.getBoundingClientRect()
      const x = ((event.clientX) / rect.width) * 2 - 1
      const y = -((event.clientY) / rect.height) * 2 + 1
      setMouse({ x, y })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [window])

  return (
    <mesh>
      <pointLight position={[mouse.x * 5, mouse.y * 5, 2]} intensity={10} castShadow={true} />
      {/* <directionalLight position={[mouse.x * 5, mouse.y * 5, 2]} intensity={1} castShadow={true} /> */}
    </mesh>
  )
}

export default function App() {
  const { dark, toggle } = React.useContext(ThemeContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const planeColor = dark ? '#54709C' : '#DEB596'
  const meshColor = dark ? '#60C1E3' : '#325A8D'

  return (
    <div className='min-h-screen w-full'>
      <div className='h-screen w-full top-0 left-0 fixed -z-10'>
        <Canvas className='w-full h-screen' shadows>
          {/* <axesHelper args={[5]} /> */}
          <ambientLight intensity={0.1} />
          <Light />
          {isMobile ? (
            <>
              <Box position={[-0.4, 0, 1]} scale={0.5} speed={1} delta={{ x: 0, y: 0.01, z: 0 }} color={meshColor} />
              <Tetra position={[0, 0, -0.5]} scale={0.6} speed={1.4} delta={{ x: -0.01, y: 0, z: 0 }} color={meshColor} />
              <Sphere position={[0.8, -2, 0]} scale={0.3} speed={0.8} delta={{ x: 0.017, y: -0.0001, z: 0.0007 }} color={meshColor} />
            </>
          ) : (
            <>
              <Box position={[3.2, 0, 1]} scale={0.5} speed={1} delta={{ x: 0, y: 0.01, z: 0 }} color={meshColor} />
              <Tetra position={[3, 0, -0.5]} scale={0.6} speed={1.4} delta={{ x: -0.01, y: 0, z: 0 }} color={meshColor} />
              <Sphere position={[3.8, -2, 0]} scale={0.3} speed={0.8} delta={{ x: 0.017, y: -0.0001, z: 0.0007 }} color={meshColor} />
            </>
          )}
          <mesh rotation={[-Math.PI/3, 0, 0]} receiveShadow={true} position={[0, 0, -3.5]}>
            <planeGeometry args={[20, 20, 32, 32]} />
            <meshStandardMaterial color={planeColor} />
          </mesh>
          <mesh receiveShadow={true} position={[0, 0, -1.5]}>
            <planeGeometry args={[20, 20, 32, 32]} />
            <meshStandardMaterial color={planeColor} />
          </mesh>
          {/* <OrbitControls /> */}
        </Canvas>
      </div>
      <Hero />
      {/* <div className='z-10 h-32 w-full bg-light-section dark:bg-dark-section -mt-16'
        style={{
          left: "-3%",
          borderTopLeftRadius: "100% 120%",
          borderTopRightRadius: "100% 120%",
        }}
      /> */}
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='experience'>
        <Experience />
      </section>
    </div>
  )
}
