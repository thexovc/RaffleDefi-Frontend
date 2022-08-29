
import Home from './pages/Home'
import Transactions from './pages/Transactions'


import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Polygon1 from './pages/Polygon1';
import Polygon2 from './pages/Polygon2';
import Polygon3 from './pages/Polygon3';
import Polygon4 from './pages/Polygon4';
import Polygon5 from './pages/Polygon5';
import Polygon6 from './pages/Polygon6';
import Header from './components/Header/Header';
import About from './pages/About';
import Others from './pages/Others';
import FullCalendar from './pages/FullCalendar';
import Pp from './pages/pp';
import Tc from './pages/tc';
import Faq from './pages/faq';
import Footer from './components/Footer/Footer';


function App() {
  const [loading, setLoading] = useState(true)
  const spinner = document.getElementById('spinner')
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none'
      setLoading(false)
    }, 2000)
  }
  return (
    !loading && (
      <>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='transactions' element={< Transactions />} />
          <Route path='contact' element={< Contact/>} />
          <Route path='polygonPage1' element={< Polygon1/>} />
          <Route path='polygonPage2' element={< Polygon2/>} />
          <Route path='polygonPage3' element={< Polygon3/>} />
          <Route path='polygonPage4' element={< Polygon4/>} />
          <Route path='polygonPage5' element={< Polygon5/>} />
          <Route path='polygonPage6' element={< Polygon6/>} />
          <Route path='others' element={< Others/>} />
       
          <Route path='fullCalendar' element={< FullCalendar />} />
          <Route path='pp' element={< Pp />} />
          <Route path='tc' element={< Tc />} />
          <Route path='faq' element={< Faq />} />
              
          


       
      </Routes>
      <Footer />
      
  </>
    )
  
  );
}

export default App;
