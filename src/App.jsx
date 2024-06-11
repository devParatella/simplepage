import LeftSidebar from './Components/LeftSidebar.jsx';
import MainContent from "./Components/MainContent.jsx";
import reactImage from "./assets/IMG/react-logo.png";
import { useState } from 'react';
import './App.css';

function App() {
  const [showTopContent, setShowTopContent] = useState(false);

  const handleMouseMove = (e) => {
    if (e.clientY <= 10) {
      setShowTopContent(true);
    } else {
      setShowTopContent(false);
    }
  };

  return (
    <div className="app" onMouseMove={handleMouseMove}>
      <div className={`top-content ${showTopContent ? 'show' : ''}`}>
        <img src={reactImage} alt="React Image" className="reactImage" />
        <p>Curriculo em React</p>
      </div>
      <LeftSidebar />
      <MainContent />
    </div>
  );
}

export default App;
