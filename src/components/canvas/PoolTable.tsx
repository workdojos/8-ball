/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.0.9 D:/udemy/playpool/public/untitled.glb -t
"Pool Table" () by Pieter Ferreira is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
*/

import React from "react";

import { Center, useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody, useRapier } from "@react-three/rapier";
import type { GLTF } from "three-stdlib";

import { PHYSIC_CONSTANTS } from "@/constants/PHYSICS";
import { type BallId, useBallsStore } from "@/utils/ballsStore";

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
    Object_2001: THREE.Mesh;
    Object_2002: THREE.Mesh;
    Object_2003: THREE.Mesh;
  };
  materials: {
    None: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/pool_table.glb"
  ) as unknown as GLTFResult;

  const rapier = useRapier();
  rapier.world.raw().integrationParameters.predictionDistance = 0.01;

  return (
    <>
      <Center position-y={-1.04} {...props}>
        <RigidBody
          type="fixed"
          colliders="trimesh"
          friction={PHYSIC_CONSTANTS.TABLE_FRICTION}
          restitution={PHYSIC_CONSTANTS.TABLE_RESTITUTION}
        >
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.None}
            rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            dispose={null}
            scale={2.26}
          />
        </RigidBody>
      </Center>
      <PoolTablePhysics />
    </>
  );
}

useGLTF.preload("/pool_table.glb");

function PoolTablePhysics() {
  const setBallStatus = useBallsStore((state) => state.setBallStatus);

  return (
    <>
      {/* {WALLS.map((wall, i) => (
        <CuboidCollider
          key={i}
          args={wall.args}
          position={wall.position}
          rotation={wall.rotation}
          friction={PHYSIC_CONSTANTS.TABLE_FRICTION}
          restitution={PHYSIC_CONSTANTS.TABLE_RESTITUTION}
        />
      ))} */}

      <CuboidCollider
        args={[1.4, 0.15, 2.43]}
        position={[0, -0.2, 0]}
        sensor
        name="pocket"
        onIntersectionEnter={(e) => {
          const ballId = e.other.rigidBodyObject?.userData.id;
          if (typeof ballId !== "number") return;

          setBallStatus("pocket", ballId as BallId);
        }}
      />
      <CuboidCollider
        args={[1.4, 0.42, 2.43]}
        position={[0, 0.37, 0]}
        sensor
        name="out"
        onIntersectionExit={(e) => {
          const ballId = e.other.rigidBodyObject?.userData.id;
          if (typeof ballId !== "number") return;

          setBallStatus("out", ballId as BallId);
        }}
      />
    </>
  );
}

// const WALLS: {
//   args: [number, number, number];
//   position: [number, number, number];
//   rotation?: [number, number, number];
// }[] = [
//   // MAIN BASE
//   {
//     args: [1.1, 0.18, 2.11],
//     position: [0, -0.18, 0],
//   },
//   // BASE SIDE
//   {
//     args: [1.02, 0.18, 0.04],
//     position: [0, -0.18, 2.15],
//   },
//   {
//     args: [1.02, 0.18, 0.04],
//     position: [0, -0.18, -2.15],
//   },
//   // POCKET BASE
//   {
//     args: [0.14, 0.18, 0.04],
//     position: [1.03, -0.18, -2.12],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.14, 0.18, 0.04],
//     position: [1.03, -0.18, 2.12],
//     rotation: [0, 0.75, 0],
//   },
//   {
//     args: [0.14, 0.18, 0.04],
//     position: [-1.03, -0.18, 2.12],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.14, 0.18, 0.04],
//     position: [-1.03, -0.18, -2.12],
//     rotation: [0, 0.75, 0],
//   },
//   // SHORT SIDE 1
//   {
//     args: [0.89, 0.05, 0.04],
//     position: [0, 0.04, 2.21],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [-1.03, 0.04, 2.32],
//     rotation: [0, 0.75, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [-0.913, 0.04, 2.225],
//     rotation: [0, 0.44, 0],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [1.03, 0.04, 2.32],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [0.913, 0.04, 2.225],
//     rotation: [0, -0.44, 0],
//   },
//   // SHORT SIDE 2
//   {
//     args: [0.89, 0.05, 0.04],
//     position: [0, 0.04, -2.21],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [-1.03, 0.04, -2.32],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [-0.913, 0.04, -2.225],
//     rotation: [0, -0.44, 0],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [1.03, 0.04, -2.32],
//     rotation: [0, 0.75, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [0.913, 0.04, -2.225],
//     rotation: [0, 0.44, 0],
//   },
//   // LONG SIDE 1
//   {
//     args: [0.04, 0.05, 0.93],
//     position: [-1.12, 0.04, -1.06],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [-1.22, 0.04, -2.12],
//     rotation: [0, -0.8, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [-1.136, 0.04, -2.01],
//     rotation: [0, 0.35, 0],
//   },
//   {
//     args: [0.04, 0.05, 0.93],
//     position: [-1.12, 0.04, 1.06],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [-1.22, 0.04, 2.12],
//     rotation: [0, 0.8, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [-1.136, 0.04, 2.01],
//     rotation: [0, -0.35, 0],
//   },
//   // LONG SIDE 2
//   {
//     args: [0.04, 0.05, 0.93],
//     position: [1.12, 0.04, -1.06],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [1.22, 0.04, -2.12],
//     rotation: [0, 0.8, 0],
//   },

//   {
//     args: [0.045, 0.05, 0.04],

//     position: [1.136, 0.04, -2.01],
//     rotation: [0, -0.35, 0],
//   },
//   {
//     args: [0.04, 0.05, 0.93],
//     position: [1.12, 0.04, 1.06],
//   },
//   {
//     args: [0.12, 0.05, 0.04],
//     position: [1.22, 0.04, 2.12],
//     rotation: [0, -0.8, 0],
//   },
//   {
//     args: [0.045, 0.05, 0.04],
//     position: [1.136, 0.04, 2.01],
//     rotation: [0, 0.35, 0],
//   },
//   // MID POCKET
//   {
//     args: [0.13, 0.05, 0.04],
//     position: [1.21, 0.04, 0.14],
//     rotation: [0, 0.23, 0],
//   },
//   {
//     args: [0.13, 0.05, 0.04],
//     position: [1.21, 0.04, -0.14],
//     rotation: [0, -0.23, 0],
//   },
//   {
//     args: [0.13, 0.05, 0.04],
//     position: [-1.21, 0.04, 0.14],
//     rotation: [0, -0.23, 0],
//   },
//   {
//     args: [0.13, 0.05, 0.04],
//     position: [-1.21, 0.04, -0.14],
//     rotation: [0, 0.23, 0],
//   },
//   // OUTSIDE
//   {
//     args: [1.32, 0.22, 0.04],
//     position: [0, -0.13, 2.39],
//   },
//   {
//     args: [1.32, 0.22, 0.04],
//     position: [0, -0.13, -2.39],
//   },
//   {
//     args: [0.04, 0.22, 2.43],
//     position: [1.36, -0.13, 0],
//   },
//   {
//     args: [0.04, 0.22, 2.43],
//     position: [-1.36, -0.13, 0],
//   },
//   // OUTSIDE POCKET
//   {
//     args: [0.04, 0.22, 0.18],
//     position: [1.24, -0.13, 2.33],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.04, 0.22, 0.18],
//     position: [-1.24, -0.13, -2.33],
//     rotation: [0, -0.75, 0],
//   },
//   {
//     args: [0.04, 0.22, 0.18],
//     position: [1.24, -0.13, -2.33],
//     rotation: [0, 0.75, 0],
//   },
//   {
//     args: [0.04, 0.22, 0.18],
//     position: [-1.24, -0.13, 2.33],
//     rotation: [0, 0.75, 0],
//   },
//   // INSIDE BASE
//   {
//     args: [1.4, 0.04, 2.43],
//     position: [0, -0.4, 0],
//   },
// ];