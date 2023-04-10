import './App.css';

function App() {
  async function logJSONData() {
    const response = await fetch("https://pokeapi.co/api/v2/ability/{id or name}/");
    const jsonData = await response.json();
    console.log(jsonData);
  }
  return (
    <div className="App">
      <header className="App-header">
       <h1> Pokemon Search</h1>
       <div className='searchbox'>
       <input type="search"></input>
       <button onClick={logJSONData}> search</button>
       </div>
       
      </header>
    </div>
  );
}

export default App;
