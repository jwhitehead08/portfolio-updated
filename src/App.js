import "./App.css";
import About from "./components/about";
import Navigation from "./components/nav-bar";
import Contact from "./components/contact";
import { useState } from 'react';
import Portfolio from "./components/portfolio";

function App() {
  const [currentPage, setcurrentPage] = useState('aboutme')
  const renderPage = () => {
    if (currentPage === 'aboutme') {
      return <About />
    } else if (currentPage === 'contact') {
      return <Contact />
    } else if (currentPage === 'portfolio') {
      return <Portfolio />
    }
  }
  const renderCurrentPage =(page) =>{
    setcurrentPage(page)
  }
  return (
    <div className="App">
      <h1>Portfolio</h1>
     <Navigation currentPage={currentPage} renderCurrentPage = {renderCurrentPage}/>
     {renderPage()}
    </div>
  );
}

export default App;
