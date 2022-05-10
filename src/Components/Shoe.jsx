/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DailyArt (https://sketchfab.com/D.art)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/canvas-shoe-38a0936e511b4f7896edf9cc2c5f198d
title: canvas shoe
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"

export default function Shoe({ ...props }) {
	useFrame((state) => {
		const t = state.clock.getElapsedTime()
		if(props.spin === true){
			group.current.rotation.y += 0.01
		}
	})
  const group = useRef()
  const { nodes, materials } = useGLTF('/models/canvas_shoe/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[7.43, 74.49, -0.27]} scale={173.89}>
            <mesh geometry={nodes.Object_6.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_15.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_21.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_27.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_33.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_36.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_39.geometry} material={materials.initialShadingGroup} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.initialShadingGroup} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/canvas_shoe/scene.gltf')
