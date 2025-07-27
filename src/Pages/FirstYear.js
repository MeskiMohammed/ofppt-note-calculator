import { useContext } from "react";
import Part from "../Part";
import noteContext from "../NoteContext";

export default function FirstYear() {
  const { L, R, setL, setR } = useContext(noteContext);
  return (
    <>
      <p className="w-full text-center mb-4 border-b">1er annee</p>

      <Part type="local" notes={L} setNotes={setL} key={"local"} />
      <Part type="regional" notes={R} setNotes={setR} key={"regional"} />

      <div className="flex justify-center">
        <p
          className={`py-4 px-8 rounded text-white text-xl font-bold ${
            (L + R) / 4 < 10 ? "bg-red-600" : "bg-green-600"
          }`}
        >
          Total : {((L + R) / 4).toFixed(2)}
        </p>
      </div>
    </>
  );
}
