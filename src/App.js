import './App.css';
import Topheadlines from './Coponents/Topheadlines';
import Navbar from './Coponents/Navbar';
import Main from  './Coponents/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './Coponents/Signup';
// fc9c6c229194dde3dbe0009936ef5a55-us21

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
       
          <Navbar />
          <Topheadlines />
          <Main />
        
       
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
 
  );
}

export default App;
