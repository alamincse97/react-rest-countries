import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}
//making a component
function LoadCountries(){
  //1.Declaring State to save loaded data
  const[countries, setCountries] = useState([])
  //2. Writing useEffect()
  useEffect(() =>{
    //3. do the fetch
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting Every Country of the World!!!</h1>
      <h3>Available Countries: {countries.length} </h3>
    </div>
  )
}
export default App;
