
import './styles/Home.css';

import HeroArea from '../components/HeroArea/HeroArea';
import Utils from '../components/Utils/Utils';
import Calendar from '../components/Calendar/Calendar';

import Join from '../components/Join/Join';
import Cta from '../components/Cta/Cta';
import Winners from '../components/Winners/Winners';
import Footer from '../components/Footer/Footer';

function App() {
  
  return (
    
      <div className="App">
    
      <HeroArea  />
      <Utils />
      <Calendar   />
      <Join />
      <Cta /> 
      <Winners />
    
      

    </div>

  
  );
}

export default App;
