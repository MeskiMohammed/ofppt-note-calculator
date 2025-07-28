import { useContext, useEffect, useState } from "react";
import Part from "../components/Part";
import noteContext from "../context/NoteContext";

export default function FirstYear() {
	const { L, R, setL, setR } = useContext(noteContext);
	const [N, setN] = useState()
	const [FY, setFY] = useState()
	const [SY, setSY] = useState(0)
	const [res, setRes] = useState(0)
	useEffect(() => {
		setSY(((parseFloat(L) + parseFloat(R)) / 4))
	}, [L, R])
	useEffect(() => {
		setRes((FY + SY * 3 + N) / 9)
	}, [N, SY, FY])

	return (
		<>
			<p className="w-full text-center mb-4 border-b">2eme annee</p>

			<Part type="local" notes={L} setNotes={setL} key={"local"} />
			<Part type="regional" notes={R} setNotes={setR} key={"regional"} />
			<div className=" bg-[rgba(255,255,255,0.07)] rounded p-4">
				<p className="text-xl mb-4 font-bold">Total des notes</p>

				<div className={`flex flex-col sm:grid mb-4 sm:grid-cols-3`}>
					<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
						<label>2eme annee : </label>
						<input
							className="border rounded w-20 text-center bg-slate-800"
							type="number"
							value={SY}
							placeholder="Note"
							disabled
						/>
					</div>
					<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
						<label>1er annee : </label>
						<input
							className="border rounded w-20 text-center bg-slate-800"
							type="number"
							placeholder="Note"
							value={FY}
							onChange={(e) => setFY(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value) > 20 ? 20 : parseInt(e.target.value))}
						/>
					</div>
					<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
						<label>national : </label>
						<input
							className="border rounded w-20 text-center bg-slate-800"
							type="number"
							placeholder="Note"
							value={N}
							onChange={(e) => setN(parseInt(e.target.value) < 0 ? 0 : parseInt(e.target.value) > 100 ? 100 : parseInt(e.target.value))}
						/>
					</div>
				</div>
			</div>


			<div className="flex justify-center">
				<p
					className={`py-4 px-8 rounded text-white text-xl font-bold ${res < 10 ? "bg-red-600" : res >= 10 ? "bg-green-600" : "bg-gray-600"}`}
				>
					Total : {res?.toFixed(2)}
				</p>
			</div>
		</>
	);
}
