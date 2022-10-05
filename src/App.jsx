import Parent from "./components/Parent";
import  "./App.css"
import {React , useState} from "react";

// import context file in the component that contains all the components
import NameContext from "./components/context/NameContext";


function App() {
  // create a state to store the name
  const [firstName , setFirstName] = useState("Abdelhaq laachari")

  return (
    // wrap the components with the context provider
    <NameContext.Provider value={firstName}>
    <div className="App">
      <h1>Component App</h1>
      <Parent/>
    </div>
    </NameContext.Provider>
  );
}

export default App;
