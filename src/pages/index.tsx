import * as THREE from 'three'
import * as React from 'react'
import { useState, useLayoutEffect, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'
import Revolution from '@/components/Revolution'

interface objProps {
  horizontal?: boolean
  speed: number
  delta: { x: number, y: number, z: number }
  color: string
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
    </mesh>
  )
}

function Model({ isMobile }: { isMobile: boolean }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const gltf = useLoader(GLTFLoader, 'three_models/suicopath.glb');

  const defaultY = (isMobile ? -1 : -1.3);

  if (isMobile){
    gltf.scene.position.set(2, defaultY, 0);
    gltf.scene.scale.set(0.7, 0.7, 0.7);
  }else{
    gltf.scene.position.set(3, defaultY, 0.4);
  }
  useLayoutEffect(() => {
    gltf.scene.rotation.set(0, 0, 0);
  }, []);
  gltf.scene.traverse(function (node: any) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  useFrame((state, delta) => {
    gltf.scene.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2 + defaultY
  })

  useLayoutEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = window.document.body.getBoundingClientRect()
      const x = ((event.clientX) / rect.width) * 2 - 1
      const y = -((event.clientY) / rect.height) * 2 + 1
      setMouse({ x, y })
      gltf.scene.rotation.set(Math.PI*1/4-y, -Math.PI*1/4+x, 0);
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [window])

  // Rotate model
  // useFrame((state, delta) => (gltf.scene.rotation.y += 0.01));

  return <primitive object={gltf.scene} />;
}

export default function App() {

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const planeColor = '#54709C'
  const meshColor = '#60C1E3'

  return (
    <div className='min-h-screen w-full'>
      <div className={`delay-[850ms] fixed transition-all duration-1000 bg-dark-background h-screen w-full flex justify-center items-center ${isLoaded ? '-bottom-full' : 'bottom-0'}`}>
        <span className='animate-pulse'>
          <Revolution />
        </span>
      </div>
      <div className='-z-10 h-screen w-full top-0 left-0 fixed'>
        {isLoaded &&
          <Canvas className=' w-full h-screen bg-dark-background' shadows>
            {/* <axesHelper args={[5]} /> */}
            <ambientLight intensity={0.1} />
            <Light />
            {isMobile ? (
              <>
                <Model isMobile={true} />
                <mesh rotation={[-Math.PI/3, 0, 0]} receiveShadow={true} position={[0, 0, -3.5]}>
                  <planeGeometry args={[20, 20, 32, 32]} />
                  <meshStandardMaterial color={planeColor} />
                </mesh>
                <mesh receiveShadow={true} position={[0, 0, -1.5]}>
                  <planeGeometry args={[20, 20, 32, 32]} />
                  <meshStandardMaterial color={planeColor} />
                </mesh>
              </>
            ) : (
              <>
                <Model isMobile={false}/>
                <mesh rotation={[-Math.PI/3, 0, 0]} receiveShadow={true} position={[0, 0, -3.5]}>
                  <planeGeometry args={[20, 20, 32, 32]} />
                  <meshStandardMaterial color={planeColor} />
                </mesh>
                <mesh receiveShadow={true} position={[0, 0, -1.5]}>
                  <planeGeometry args={[20, 20, 32, 32]} />
                  <meshStandardMaterial color={planeColor} />
                </mesh>
              </>
            )}
            {/* <OrbitControls /> */}
          </Canvas>
        }
      </div>
      {isLoaded && 
        <>
        <Hero />
        <section className='z-10' id='about'>
          <About />
        </section>
        <section className='z-10 -my-3' id='skills'>
          <Skills />
        </section>
        <section className='z-10 -my-3' id='experience'>
          <Experience />
        </section>
        <section className='z-10' id='contact'>
          <Contact />
        </section>
        <section className='z-10' id='footer'>
          <Footer />
        </section>
        </>
      }
    </div>
  )
}