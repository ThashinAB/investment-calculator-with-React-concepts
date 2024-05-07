import Header from "./components/Header"
import { useState } from "react";
import UserInput from "./components/UserInput";


function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  // const [investmentResults, setInvestmentResults] = useState([]);


  function handleInputChange(InputIdentifier, NewValue) {
    setUserInput(prevState => ({
      ...prevState, [InputIdentifier]: NewValue
    }));
  };

  // const results = calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration });
  //   setInvestmentResults(results);
  //   console.log(userInput);

  return (
    <>
      <Header />
      <UserInput onChange={handleInputChange} userInput={userInput}/>

      
    </>

  )
}

export default App
