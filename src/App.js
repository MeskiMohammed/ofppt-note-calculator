import { useState, useEffect } from "react";
import InputDiv from "./InputDiv";
import NoteProvider from "./NoteProvider";
import Part from "./Part";

function App() {
  const[L,setL]=useState()
  const[R,setR]=useState()

  return (
    <NoteProvider>
    <div className="min-h-screen p-4 bg-slate-900 text-white flex flex-col gap-4">
      <p className="w-full text-center mb-4 text-xl font-bold">OFPPT note calculator <span className="text-[8px]">made by WHISKY</span></p>
      <p className="w-full text-center mb-4 border-b">1ere annee</p>

      <Part type="local" notes={L} setNotes={setL}/>
      <Part type="regional" notes={R} setNotes={setR}/>

      <div className="flex justify-center">
        <p className={`py-4 px-8 rounded text-white text-xl font-bold ${(L+R)/4<10?'bg-red-600':'bg-green-600'}`}>Total : {((L+R)/4).toFixed(2)}</p>
      </div>
    </div>
    </NoteProvider>
  );
}

export default App;
