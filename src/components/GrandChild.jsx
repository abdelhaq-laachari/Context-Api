import {React , useContext} from "react";
import NameContext from "./context/NameContext";


function GrandChild() {
  // get the value from the context
  const NameValue= useContext(NameContext)
  return (
    <>
      <h1>Component GrandChild</h1>
      <span> {NameValue} </span>
    </>
  );
}

export default GrandChild;
