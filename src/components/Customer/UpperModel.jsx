import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import { useState } from 'react'
import { Suspense } from 'react'

import CamControl from "../utilComp/CamControl"
import ControlPanel from "../utilComp/ControlPanel"
import BackNext from './BackNext'
import { NewCostume } from './NewCostume'


const UpperModel = () => {
    const [control, setControl] = useState({
        x: 0,
        y: -5.2,
        z: 0
    })
    const [camCont, setCamCont] = useState({
        scale: 4.3,
    })
    return (

        <div className="w-1/2 h-[calc(100vh-4rem)] flex items-center relative">
            {/* <ControlPanel control={control} setControl={setControl} />
            <CamControl camCont={camCont} setCamCont={setCamCont} /> */}
            <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                <Suspense fallback={false}>
                    <NewCostume camCont={camCont} control={control} />
                </Suspense>
                <OrbitControls enableZoom={true} makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                <Environment preset="city" />
                {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.25} width={10} height={10} blur={1} far={4.5} /> */}
            </Canvas>

            <BackNext />

        </div>
    )
}

export default UpperModel