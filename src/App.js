import "./App.css"
import Search from "./components/search/search";
import CurrentWether from "../src/components/current-wether/wether"
function App() {
const handleOnSearchChange=(searchData)=>{
   console.log(searchData)
}
  return (
    <div className="App">
     <Search onSearchChange={handleOnSearchChange}/>
     <CurrentWether/>
  </div>
  );
}

export default App;

