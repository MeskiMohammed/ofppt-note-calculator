import { useState, useEffect } from "react";

export default function InputDiv({ list, setList, index, type }) {
  const [note, setNote] = useState();
  const [Imax, setImax] = useState();
  const [coef, setCoef] = useState(
    type === "local"
      ? 1
      : type === "regional"
      ? 3
      : type === "national"
      ? 5
      : null
  );

  useEffect(() => {
    if (type === "regional") {
      setImax(3);
    } else if (type === "local") {
      setImax(2);
    } else if (type === "national") {
      setImax(5);
    }
  }, [type]);

  useEffect(() => {
    let tmp = [...list];
    tmp[index] = { note, coef, noteCoef: note * coef || 0 };
    setList(tmp);
  }, [note, coef]);

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-3">
      <div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
        <label>Note : </label>
        <input
          className="border rounded w-20 text-center bg-slate-800"
          type="number"
          placeholder="Note"
          value={note}
          onChange={(e) =>
            setNote(
              parseFloat(e.target.value) < 0
                ? 0
                : parseFloat(e.target.value) > (Imax === 5 ? 100 : 20)
                ? Imax === 5
                  ? 100
                  : 20
                : parseFloat(e.target.value)
            )
          }
          min={0}
          max={Imax === 5 ? 100 : 20}
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
              parseInt(e.target.value) < 0
                ? 0
                : parseInt(e.target.value) > Imax
                ? Imax
                : parseInt(e.target.value)
            )
          }
          min={1}
          defaultValue={Imax === 2 ? 1 : Imax}
          max={Imax}
          disabled={Imax === 5}
        />
      </div>
      <div className="flex justify-between scale-110 mx-10 my-2 sm:justify-center gap-2">
        <label>Total Module : </label>
        <input
          className="border rounded w-20 text-center bg-slate-800"
          type="number"
          placeholder="Note * Coef"
          disabled
          value={note * coef || 0}
        />
      </div>
    </div>
  );
}
