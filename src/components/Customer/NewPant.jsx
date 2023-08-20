/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/newPant.gltf
*/

import { useGLTF } from '@react-three/drei'
// import { useTexture } from '@react-three/drei'

// import React, { useRef } from 'react'

export default function NewPant(props) {
  const { nodes, materials } = useGLTF('/models/newPant.gltf')


  return (
    <group {...props} dispose={null} position={[props.control.x, props.control.y, props.control.z]} scale={props.camCont.scale}>

      <mesh geometry={nodes.Pants_Button.geometry} material={materials.Button} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>
      <mesh geometry={nodes.Pants_Suit_Button_Holes.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>
      <mesh geometry={nodes.Pants_Suit_Main.geometry} material={materials.Suit_OlivieSolidBrushedTwill} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>
      <mesh geometry={nodes.Pants_Suit_PocketWelts.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>

      <mesh geometry={nodes.PantsSlim_Button.geometry} material={materials.Button} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} >
      </mesh>
      <mesh geometry={nodes.PantsSlim_Suit.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>
      <mesh geometry={nodes.PantsSlim_Suit_Button_Holes.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
      </mesh>
      <mesh geometry={nodes.PantsSlim_Suit_PocketWelts.geometry} material={materials.b0b0b0} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} >
      </mesh>

    </group>
  )
}

useGLTF.preload('/models/newPant.gltf')
