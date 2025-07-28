import { useState, useEffect } from "react";

export default function InputDiv({ list, setList, index, isRegio }) {
	const [note, setNote] = useState();
	const [Imax, setImax] = useState(isRegio ? 3 : 2);
	const [coef, setCoef] = useState(isRegio ? 3 : 1);


	useEffect(() => {
		let tmp = [...list];
		tmp[index] = {
			note, coef, noteCoef: note * coef
		};
		setList(tmp);
	}, [note, coef]);

	return (
		<div className={`flex flex-col sm:grid sm:grid-cols-3`}>
			<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
				<label>Note : </label>
				<input
					className="border rounded w-20 text-center bg-slate-800"
					type="number"
					placeholder="Note"
					value={note}
					onChange={(e) =>
						setNote(
							parseFloat(e.target.value) < 0 ? 0 : parseFloat(e.target.value) > 20 ? 20 : parseFloat(e.target.value)
						)
					}
				/>
			</div>
			<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
				<label>Coef : </label>
				<input
					className="border rounded w-20 text-center bg-slate-800"
					type="number"
					placeholder="Coef"
					value={coef}
					onChange={(e) =>
						setCoef(
							parseInt(e.target.value) < 1
								? 1
								: parseInt(e.target.value) > Imax
									? Imax
									: parseInt(e.target.value)
						)
					}
				/>
			</div>
			<div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
				<label>Total Module : </label>
				<input
					className="border rounded w-20 text-center bg-slate-800"
					type="number"
					placeholder="Note * Coef"
					disabled
					value={((note * coef).toFixed(2)) ?? 0}
				/>
			</div>
		</div>
	);
}
