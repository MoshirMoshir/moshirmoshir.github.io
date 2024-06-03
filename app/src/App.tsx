import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '@components/navbar/NavBar'
import Home from '@pages/home/Home'
import Blogs from '@pages/blogs/Blogs'
import Projects from '@pages/projects/Projects'
import Games from '@pages/games/Games'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
