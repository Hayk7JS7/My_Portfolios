import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Project from './components/projects/Project'
import Education from './components/education/Education';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about"  element={<About/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/education" element={<Education/>}/>
      </Routes>
    </div>
  );
}

export default App;