import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Navigation />
    <div className="bg-img"></div>
    <Routes>
      <Route path = "/" element={ <About /> }/>
      <Route path = "/experience" element = {<Experience />} />
      <Route path = "/technologies" element = {<Technologies/>} />
      <Route path = "/projects" element={<Projects/>} />

    </Routes>
    </>
  );
}

export default App;
