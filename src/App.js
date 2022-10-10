import logo from './logo.svg';
import './App.css';

import { Footer } from './cmps/footer.jsx'
import { Route, Routes } from 'react-router-dom'
import { About } from './cmps/about'
import { Home } from './cmps/home'
import {Contact} from './cmps/contact'
function App() {
  return (
    <div className="App">


      <Routes>
        <Route  path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
