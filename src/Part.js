import { useState, useEffect } from "react"
import InputDiv from "./InputDiv";

export default function Part({ type, notes, setNotes }) {
    const [list, setList] = useState([])
    const [items, setItems] = useState(1)

    useEffect(() => { setNotes(list.reduce((totaleNC, i) => totaleNC += parseFloat(i.noteCoef), 0) / list.reduce((totaleC, i) => totaleC += parseInt(i.coef), 0)) }, [list])

    return <>
        <p className="w-full mb-4">{type}</p>
        {Array.from({ length: items }).map((_, i) => <div className="my-4"><InputDiv list={list} setList={setList} index={i} max={2} key={type + i} /></div>)}
        <br />
        <p className="text-end">Total list : {notes?.toFixed(2)}</p>
        <br />
        <div className="flex justify-end"><button className="bg-black px-4 py-2 rounded" onClick={() => setItems(items + 1)}>Add a {type} module</button></div>
    </>
}