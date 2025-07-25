import { useState, useEffect } from "react";
export default function InputDiv({list,setList,index,max}) {
    const [note,setNote]=useState();
    const [coef,setCoef]=useState(1);

    useEffect(()=>{
        if(note>20)setNote(20)
        if(coef>max)setCoef(max)
        let tmp = [...list]
        tmp[index]={note,coef,noteCoef:note*coef||0}
        setList(tmp)
    },[note, coef])

    return (
        <div className="grid grid-cols-3">
            <div className="flex justify-center"><label>Note : </label><input className="border rounded w-20 text-center" type="number" placeholder="Note" value={note} onChange={(e)=>setNote(e.target.value)} min={0} max={20}/></div>
            <div className="flex justify-center"><label>Coef : </label><input className="border rounded w-20 text-center" type="number" placeholder="Coef" value={coef} onChange={(e)=>setCoef(e.target.value)} min={1} defaultValue={1} max={max}/></div>
            <div className="flex justify-center"><label>Total Module : </label><input className="border rounded w-20 text-center" type="number" placeholder="Note * Coef" disabled value={note*coef||0} /></div>
        </div>
    );
}
