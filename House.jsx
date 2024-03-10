/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 house.glb 
Author: Andy Woodhead (https://sketchfab.com/Andywoodhead)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/preceptory-and-dower-house-game-asset-50d31c70e44b4000b17d81ff0fbcdf98
Title: Preceptory and Dower House - game asset
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/house.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Bench} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Logs} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Barrel} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Cart} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.House} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Chapel} />
          <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Walls} />
          <mesh geometry={nodes.defaultMaterial_7.geometry} material={materials.Ground} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.glb')
