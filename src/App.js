import { StrictMode, useState } from "react";
import NoteProvider from "./NoteProvider";
import FirstYear from "./Pages/FirstYear";
import SecondYear from "./Pages/SecondYear"

function App() {
  const [page,setPage]=useState(1)
  return (
    <StrictMode>
    <NoteProvider>
    <div className="min-h-screen p-4 bg-slate-900 text-white flex flex-col gap-4">
      <p className="w-full text-center mb-4 text-xl font-bold">OFPPT note calculator <span className="text-[8px]">made by WHISKY</span></p>
      <div className="flex justify-around">
        <button className={`rounded-lg bg-stale-800 px-8 py-4 border ${page===1?'bg-slate-800':''}`} onClick={()=>setPage(1)}>First Year</button>
        <button className={`rounded-lg bg-stale-800 px-8 py-4 border ${page===2?'bg-slate-800':''}`} onClick={()=>setPage(2)}>Second Year</button>
      </div>
      {page === 1 && <FirstYear/>}
      {page === 2 && <SecondYear/>}
    </div>
    </NoteProvider>
    </StrictMode>
  );
}

export default App;
