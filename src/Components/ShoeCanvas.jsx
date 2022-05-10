import React , {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Shoe from "./Shoe";

export default function ShoeCanvas({...props}){
	return(
		<>
			<Canvas camera={{position: [0, 0.25, 5], pov: 70}} dpr={[1,2]} shadows>
				<ambientLight intensity={0.2} />
				<spotLight position={[0,3,5]} intensity={0.6} />
				<Suspense fallback={null}>
					<Shoe scale={0.01} {...props} position={[0, -1, 0]}/>
				</Suspense>
			</Canvas>
			<Loader 
				containerStyles={{backgroundColor: 'transparent', width: '60%'}}
				dataStyles={{color: 'black'}}
			/>
		</>
	)
}
