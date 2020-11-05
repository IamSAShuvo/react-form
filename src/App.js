import logo from './logo.svg';
import './App.css';
import Name from './components/name';
import Greatings from './components/greatings';
import Data from './components/state';
function App() {
  return (
    <div className="App">
     {/* <Name name = "Salman" age = "26">
       <p>Description</p>
     </Name>
     <Greatings cname = "Welcome"></Greatings> */}
    <Data></Data>
    </div>
  );
}

export default App;
