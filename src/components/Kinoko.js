import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Kinoko = () => {
	return (
		<>
			{" "}
			<Sphere visible args={[1, 100, 200]} scale={2}>
				<MeshDistortMaterial
					color="#8352FD"
					attach="material"
					distort={0.8}
					speed={2.2}
					roughness={1}
				/>
			</Sphere>
		</>
	);
};

export default Kinoko;
