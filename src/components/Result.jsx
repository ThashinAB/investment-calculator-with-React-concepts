import { calculateInvestmentResults } from "../util/investment";


export default function Result() {
    return (
        
        <div id="result">
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {/* {investmentResults.map((result, index) => (<tr key={index}>
              <td>{result.year}</td>
              <td>{result.investmentValue}</td>
              <td>{result.interest}</td>
              <td>{result.interest}</td>
              <td>{result.year}</td>




            </tr>))} */}


          </tbody>
        </table>
      </div>
    )
}