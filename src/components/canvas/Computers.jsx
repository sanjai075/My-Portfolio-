import  { Suspense, useEffect, useState,useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {

  const computer = useGLTF('./desktop_pc/scene.gltf')
  const computerRef = useRef();

  useFrame((state, delta) => {
    // Rotate the object around the Y-axis
    if (computerRef.current) {
      computerRef.current.rotation.y += 0.001;
    }
  });


  return (
   <mesh ref={computerRef}>
    <hemisphereLight intensity={1}
    
    groundColor="black"/>
    <pointLight intensity={2}/>
    <spotLight
        position={[-10, 20, 20]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <primitive
     object={computer.scene}
     scale={isMobile ? 0.6 : 0.7}
     position={isMobile ? [0, -2, -1.9] : [0, -3.25, -1.5]}
     rotation={[0,0,0]}
     />
     
   </mesh>
  )
}
const ComputersCanvas = ()=>{

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return(
    <Canvas
    frameLoop="demand"
    shadows
    camera={{ position: [20, 8, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader/>}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers isMobile={isMobile}  />
    </Suspense>

    <Preload all />
  </Canvas>
  )
}
export default ComputersCanvas
