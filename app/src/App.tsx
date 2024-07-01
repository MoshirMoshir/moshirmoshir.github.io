import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '@components/navbar/NavBar';
import Home from '@pages/home/Home';
import Blogs from '@pages/blogs/Blogs';
import Projects from '@pages/projects/Projects';
import Games from '@pages/games/Games';
import MinecraftSMP from '@pages/projects/project_pages/MinecraftSMP';
import ArcadeMap from '@pages/projects/project_pages/ArcadeMap';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/projects/MinecraftSMP" element={<MinecraftSMP />} />
        <Route path="/projects/ArcadeMap" element={<ArcadeMap />} />
      </Routes>
    </>
  );
}

export default App;
