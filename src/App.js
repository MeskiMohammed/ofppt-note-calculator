import { useState, useEffect } from "react";
import InputDiv from "./InputDiv";

function App() {
  const[L,setL]=useState()
  const[local,setLocal]=useState([])
  const[localItems,setLocalItems]=useState(1)

  const[R,setR]=useState()
  const[regio,setRegio]=useState([])
  const[regioItems,setRegioItems]=useState(1)

  useEffect(()=>{setL(local.reduce((totaleNC,i)=>totaleNC+=parseFloat(i.noteCoef),0)/local.reduce((totaleC,i)=>totaleC+=parseInt(i.coef),0))},[local])
  useEffect(()=>{setR((regio.reduce((totaleNC,i)=>totaleNC+=parseFloat(i.noteCoef),0) / regio.reduce((totalC,i)=>totalC+=parseInt(i.coef),0))*3)},[regio])

  return (
    <div className="min-h-screen p-4 bg-slate-900 text-white flex flex-col gap-4 sm:scale-75">
      <p className="w-full text-center mb-4 text-xl font-bold">OFPPT note calculator</p>
      <p className="w-full text-center mb-4 border-b">1ere annee</p>

      <div>
        <p className="w-full mb-4">Local</p>
        {Array.from({length:localItems}).map((_,i)=><div className="my-4"><InputDiv list={local} setList={setLocal} index={i} max={2} key={"L"+i}/></div>)}
        <br/>
        <p className="text-end">Total Local : {L?.toFixed(2)}</p>
        <br/>
        <div className="flex justify-end"><button className="bg-black px-4 py-2 rounded" onClick={()=>setLocalItems(localItems+1)}>Add a local module</button></div>
      </div>

      <div>
        <p className="w-full mb-4">Regional</p>
        {Array.from({length:regioItems}).map((_,i)=><div className="my-4"><InputDiv list={regio} setList={setRegio} index={i} max={3} key={"R"+i}/></div>)}
        <br/>
        <p className="text-end">Total Regional : {R?.toFixed(2)}</p>
        <br/>
        <div className="flex justify-end"><button className="bg-black px-4 py-2 rounded" onClick={()=>setRegioItems(regioItems+1)}>Add a regional module</button></div>
      </div>

      <div className="flex justify-center">
        <p className={`py-4 px-8 rounded text-white text-xl font-bold ${(L+R)/4<10?'bg-red-600':'bg-green-600'}`}>Total : {((L+R)/4).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;
