import './App.css';
import Topheadlines from './Coponents/Topheadlines';
import Navbar from './Coponents/Navbar';
import Main from  './Coponents/Main'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Topheadlines/>
      <Main/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
