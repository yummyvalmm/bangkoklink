import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import './index.css';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-background-dark text-white">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/properties/:id" element={<PropertyDetail />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
