import Header from "./components/Header"
import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(InputIdentifier, NewValue) {
    setUserInput(prevState => ({
      ...prevState, [InputIdentifier]: +NewValue
    }));
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput}/>
      {inputIsValid ? <Result input={userInput}/> : <p className="center">Note : Duration (Years) should be greater than 0 !!</p> }
  
    </>

  )
}

export default App
