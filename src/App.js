import './App.css';
import Topheadlines from './Coponents/Topheadlines';
import Navbar from './Coponents/Navbar';
import Main from  './Coponents/Main'
import Footer from './Coponents/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Topheadlines/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
