import { useState } from "react";
import Counter from "./components/counter/Counter";

var userName = "Naveed";
userName = "Naveed Sarwar";

export default function App() {
  // useState('')
  // useState(324)
  // useState(false)
  // useState(234.324)
  // useState(null)
  // useState([1,2])
  // useState({})
  const [userFullName, setUserFullName] = useState("Naveed");

  const changeNameHandlerForVar = () => {
    alert("function call");
    userName = "Muhammad";
    console.log("userName in CTA", userName);
    console.log("state userName in CTA", userFullName);
  };

  const changeNameHandlerForState = () => {
    alert("function call for state");
    setUserFullName("Naveed Sarwar");
    console.log("userName in CTA", userName);
    console.log("state userName in CTA", userFullName);
  };

  // console.log("state userName in component", userFullName);
  // console.log("userName in component", userName);
  return (
    <div>
      <Counter/>
      {/* <div id="userName">Name:{userName}</div>
      <p>State User Name: {userFullName}</p>
      <button onClick={changeNameHandlerForVar}>Change Name for Var</button>
      <button onClick={changeNameHandlerForState}>Change Name for State</button> */}
    </div>
  );
}

// document.getElementById('userName').innerHTML = `Name: ${userName}`
