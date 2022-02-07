import entete from './images/entete.png';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Archi from './pages/archi';
import Aventure from './pages/aventure';
import Comedie from './pages/comedie';
import Couture from './pages/couture';

function App() {
    return (<>
        <div>
        <header>
            <img src={entete} className="entete" alt="en-tête" />
        </header>
        </div>
        <Router>
        <Navbar />
        <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/archi" element={<Archi /> } />
            <Route path="/aventure" element={ <Aventure /> } />
            <Route path="/comedie" element={ <Comedie /> } />
            <Route path="/couture" element={ <Couture /> } />
        </Routes>
        </Router> 
    </>);
}

export default App;
