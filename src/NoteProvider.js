import { useEffect, useState } from "react";
import noteContext from "./NoteContext";
export default function NoteProvider({ children }) {
  const [L, setL] = useState();
  const [R, setR] = useState();
  const [N, setN] = useState();

  useEffect(()=>{
    setL(window.sessionStorage.getItem("L"))
    setR(window.sessionStorage.getItem("R"))
    setN(window.sessionStorage.getItem("N"))
  },[])

  useEffect(()=>{
    window.sessionStorage.setItem('L',L)
    window.sessionStorage.setItem('R',R)
    window.sessionStorage.setItem('N',N)
  },[L,R,N])

  return (
    <noteContext.Provider value={{ L, setL, R, setR, N, setN }}>
      {children}
    </noteContext.Provider>
  );
}
