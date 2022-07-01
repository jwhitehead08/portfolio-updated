import "./App.css";
import About from "./components/about";
import Navigation from "./components/nav-bar";
import Contact from "./components/contact";
import { useState } from 'react';
import Portfolio from "./components/portfolio";

import Footer from "./components/footer";
import Resume from "./components/resume";

function App() {
  const [currentPage, setcurrentPage] = useState('aboutme')
  const renderPage = () => {
    if (currentPage === 'aboutme') {
      return <About />
    } else if (currentPage === 'contact') {
      return <Contact />
    } else if (currentPage === 'portfolio') {
      return <Portfolio />
    } else if (currentPage === 'resume') {
      return <Resume/>
    }
  }
  const renderCurrentPage =(page) =>{
    setcurrentPage(page)
  }
  return (
    <div className="App">
     <Navigation currentPage={currentPage} renderCurrentPage = {renderCurrentPage}/>
     {renderPage()}

      <Footer/>
    </div>
  );
}

export default App;
