import Header from "./components/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Archi from './pages/archi';
import Aventure from './pages/aventure';
import Comedie from './pages/comedie';
import Couture from './pages/couture';
import Admin from './pages/admin';


function App() {
    return (
        <Router>
        <Header />
        <Navbar />
        <Routes>
            <Route path="/" exact element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/archi" element={ <Archi /> } />
            <Route path="/aventure" element={ <Aventure /> } />
            <Route path="/comedie" element={ <Comedie /> } />
            <Route path="/couture" element={ <Couture /> } />
            <Route path="/admin" element={ <Admin /> } />
        </Routes>
        </Router> 
    );
}

export default App;
