import { StrictMode, useEffect, useState } from "react";
import NoteProvider from "./context/NoteProvider";
import FirstYear from "./Pages/FirstYear";
import SecondYear from "./Pages/SecondYear"

function App() {
	const [page, setPage] = useState(Number(window.sessionStorage.getItem('page')) || 1)
	useEffect(() => {
		window.sessionStorage.setItem("page", page)
	}, [page])
	return (
		<StrictMode>
			<NoteProvider>
				<div className="min-h-screen p-4 bg-slate-900 text-white flex flex-col gap-4">
					<p className="w-full relative text-center mb-4 text-xl font-bold">OFPPT note calculator <span className="absolute bottom-[-4px] text-[8px]">made by WHISKY</span></p>
					<div className="flex justify-around">
						<button className={`rounded-lg bg-stale-800 px-8 py-4 border ${page === 1 ? 'bg-slate-800' : ''}`} onClick={() => setPage(1)}>1er annee</button>
						<button className={`rounded-lg bg-stale-800 px-8 py-4 border ${page === 2 ? 'bg-slate-800' : ''}`} onClick={() => setPage(2)}>2eme annee</button>
					</div>
					{page === 1 && <FirstYear />}
					{page === 2 && <SecondYear />}
				</div>
			</NoteProvider>
		</StrictMode>
	);
}

export default App;
