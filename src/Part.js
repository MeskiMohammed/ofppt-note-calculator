import { useState, useEffect } from "react";
import InputDiv from "./InputDiv";

export default function Part({ notes, setNotes, type }) {
  const [list, setList] = useState([]);
  const [items, setItems] = useState(1);

  useEffect(() => {
    const NC = list.reduce(
      (totaleNC, i) => (totaleNC += parseFloat(i.noteCoef)),
      0
    );
    const C = list.reduce((totaleC, i) => (totaleC += parseInt(i.coef)), 0);
    if (type === "regional") {
      setNotes((NC / C) * 3);
    } else if (type === "local") {
      setNotes(NC / C);
    } else if (type === "national") {
    }
  }, [type, list, setNotes]);

  return (
    <>
      <p className="w-full mb-4 text-xl font-bold">{type}</p>
      {Array.from({ length: items }).map((_, i) => (
        <div className="my-4" key={type + i}>
          <InputDiv list={list} setList={setList} index={i} type={type} />
        </div>
      ))}
      <br />
      <p className="text-end">
        Total {type} : {notes?.toFixed(2)}
      </p>
      <br />
      <div className="flex justify-end">
        {type !== "national" && (
          <button
            className="bg-black px-4 py-2 rounded"
            onClick={() => setItems(items + 1)}
          >
            Add a {type} module
          </button>
        )}
      </div>
    </>
  );
}
