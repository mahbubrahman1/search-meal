import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import MealDetails from './pages/MealDetails';
import Meals from './pages/Meals';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App font-poppins scroll-smooth">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/meals' element={<Meals />} />
          <Route path='/meal/:id' element={<MealDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
