import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import Experience from './Experience'

const UpperModel = () => {

    return (
       <>
        <Canvas className="flex justify-center items-center m-auto" camera={{ position: [4, 0, -12], fov: 30 }}>
            <Experience />
            <OrbitControls  enableZoom={true} makeDefault minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
        </Canvas>
       </>
    )
}

export default UpperModel