import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';


function App() {
  return (
    <BrowserRouter> 
        <div className="App">
       <Header />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
       </Routes>
       <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
