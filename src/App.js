
import './App.css';
import{Route, Routes,Link, NavLink, useLoaderData} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import { priceLoader } from "./loaders"
function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/"><div>Home</div></NavLink></li>
        <li><NavLink to="/about"><div>About</div></NavLink></li>
        
        <li><NavLink to="/stocks"><div>Stock</div></NavLink></li>
      </ul>
    </nav>
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/stocks" element={<Dashboard/>}/>
     <Route path="/stocks/:symbol" element={<Stock/>} loader={priceLoader}/>
     
      </Routes>
      
     
    </div>
    </>
  );
}

export default App;
