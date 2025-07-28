import { useEffect, useState } from "react";
import noteContext from "./NoteContext";
export default function NoteProvider({ children }) {
	const [L, setL] = useState();
	const [R, setR] = useState();

	return (
		<noteContext.Provider value={{ L, setL, R, setR }}>
			{children}
		</noteContext.Provider>
	);
}
