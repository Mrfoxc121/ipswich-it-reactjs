import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Faq from "./pages/Faq"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Remote from "./pages/Remote"
import Services from './pages/Services';
import CloudComputing from './pages/CloudComputing';
import CCTVSurvalence from './pages/CCTVSurvalence';
import CyberSecurity from './pages/CyberSecurity';
import DataRecovery from './pages/DataRecovery';
import NetworkServices from './pages/NetworkServices';
import PenetrationTesting from './pages/PenetrationTesting';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='max-w-[1400px] m-auto mt-10 container'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/remote" element={<Remote />} />
        <Route path="/cloud-computing" element={<CloudComputing />} />
        <Route path="/cctv-servalence" element={<CCTVSurvalence />} />
        <Route path="/cyber-security" element={<CyberSecurity />} />
        <Route path="/data-recovery" element={<DataRecovery />} />
        <Route path="/network-services" element={<NetworkServices />} />
        <Route path="/penetration-testing" element={<PenetrationTesting />} />
        <Route path="/services" element={<Services />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
