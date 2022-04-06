import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import Archi from './pages/archi'
import JeunePublic from './pages/jeune-public'
import Adultes from './pages/adultes'
import Aventure from './pages/aventure'
import Comedie from './pages/comedie'
import LaVieCeChantier from './pages/la-vie-ce-chantier'
import Couture from './pages/couture'
import AtelierDIY from './pages/atelier-diy'
import SurMesure from './pages/sur-mesure'
import Admin from './pages/admin'
import Contact from './pages/contact'


function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Routes>
                <Route path='/A2C2' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
                <Route path='/archi' exact element={ <Archi /> } />
                <Route path='/archi/jeune-public' element={ <JeunePublic /> } />
                <Route path='/archi/adultes' element={ <Adultes /> } />
                <Route path='/aventure' element={ <Aventure /> } />
                <Route path='/comedie' exact element={ <Comedie /> } />
                <Route path='/comedie/la-vie-ce-chantier' element={ <LaVieCeChantier /> } />
                <Route path='/couture' exact element={ <Couture /> } />
                <Route path='/couture/atelier-diy' element={ <AtelierDIY /> } />
                <Route path='/couture/sur-mesure' element={ <SurMesure /> } />
                <Route path='/admin' element={ <Admin /> } />
                <Route path='/contact' element={ <Contact /> } />
            </Routes>
            <Footer />
        </Router> 
    )
}

export default App
