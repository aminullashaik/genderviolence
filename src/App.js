import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Counselor from './pages/Counselor';
import LegalAdvisor from './pages/LegalAdvisor';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Admin from './pages/Admin'; 
import SeekShelter from './pages/Home/SeekShelter'
import ResourceCenter from './pages/Home/ResoureCenter'
import IncidentReporting from './pages/Home/IncidentReporting';

import LoginRegister from './Components/LoginRegister/LoginRegister';

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/admin" element={<Admin />} /> {/* Admin Route */}
          <Route path="/legaladvisor" element={<LegalAdvisor/>}/>
          <Route path="/counselor" element={<Counselor/>}/>
          <Route path="/seek-shelter" element={<SeekShelter />} /> 
          <Route path="/resource-center" element={<ResourceCenter />} />
          <Route path="/incident-reporting" element={<IncidentReporting/>} />


        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
