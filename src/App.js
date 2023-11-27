
import './App.css';
import About from './components/About';
import Blackscreen from './components/Blackscreen';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Services from './components/Services';
// import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Blackscreen/>
      <Navbar/>
      <Main/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
