import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
      Cube: THREE.Mesh
      Plane: THREE.Mesh
    }
    materials: {
      ['Dirt 02']: THREE.MeshStandardMaterial
      ['Material.003']: THREE.MeshStandardMaterial
    }
}

type Props = {}

export const TerrainModel = (props: Props) => {

    const { nodes, materials } = useGLTF(require('../../assets/3d/terrain.glb')) as GLTFResult
    return (
        <group {...props} dispose={null} scale={0.}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Dirt 02']}
            position={[0.529, 1.089, 0.546]}
            scale={[6, 1, 6]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials['Material.003']}
            position={[0.529, 2.097, 0.546]}
            scale={[6, 1, 6]}
        />
        </group>
    )
}