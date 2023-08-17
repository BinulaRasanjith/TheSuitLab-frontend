import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import { useState } from 'react'

import { CustomizationProvider } from "../../contexts/Controller";
import CamControl from "../utilComp/CamControl"
import ControlPanel from "../utilComp/ControlPanel"
import BackNext from './BackNext'
import NewPant from './NewPant'




const PantModel = () => {


    const [control, setControl] = useState({
        x: 0,
        y: -1.4,
        z: 0
    })
    const [camCont, setCamCont] = useState({
        scale: 3,
    })

    return (
        <div className="w-1/2 h-[calc(100vh-4rem)] flex items-center relative">
            {/* <ControlPanel control={control} setControl={setControl} />
            <CamControl camCont={camCont} setCamCont={setCamCont} /> */}
            <CustomizationProvider>
                <Canvas camera={{ position: [0, 0, 10], fov: 30 }}>
                    <Suspense fallback={false}>
                        <NewPant camCont={camCont} control={control} />
                    </Suspense>
                    <OrbitControls enableZoom={true} makeDefault maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                    <Environment preset="city" />
                    {/* <ContactShadows rotation-x={Math.PI / 2} position={[0, -4.5, 0]} opacity={0.25} width={10} height={10} blur={1} far={4.5} /> */}
                </Canvas>
            </CustomizationProvider>

            <BackNext />

        </div>
    )
}

export default PantModel