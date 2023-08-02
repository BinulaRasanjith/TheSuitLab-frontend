//  import React, { useState } from 'react'
import { Stage } from "@react-three/drei"
//  import { useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'

// import { Suit1 } from './Suit1'
import { NewCostume } from './NewCostume'


export default function Experience() {
    // const gltf = useLoader(GLTFLoader, '../../public/models/suit1.gltf')  
    return (
        <Stage contactShadow={false} environment="city" intensity={0.6}>
            <Suspense fallback={false}>
                {/* <Suit1 controller={controller} /> */}
                <NewCostume />
            </Suspense>
        </Stage>
    )
}
