import { useState, useEffect, useContext } from "react";
import noteContext from "./NoteContext";

export default function InputDiv({list,setList,index,max}) {
    const [note,setNote]=useState();
    const [coef,setCoef]=useState(1);
    const {L} = useContext(noteContext)

    useEffect(()=>{
        if(note>20)setNote(20)
        if(coef>max)setCoef(max)
        let tmp = [...list]
        tmp[index]={note,coef,noteCoef:note*coef||0}
        setList(tmp)
    },[note, coef])

    return (
        <div className="flex flex-col sm:grid sm:grid-cols-3">
            {L}
            <div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2"><label>Note : </label><input className="border rounded w-20 text-center bg-slate-800" type="number" placeholder="Note" value={note} onChange={(e)=>setNote(e.target.value)} min={0} max={20}/></div>
            <div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2"><label>Coef : </label><input className="border rounded w-20 text-center bg-slate-800" type="number" placeholder="Coef" value={coef} onChange={(e)=>setCoef(e.target.value)} min={1} defaultValue={1} max={max}/></div>
            <div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2"><label>Total Module : </label><input className="border rounded w-20 text-center bg-slate-800" type="number" placeholder="Note * Coef" disabled value={note*coef||0} /></div>
        </div>
    );
}
