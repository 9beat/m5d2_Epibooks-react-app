import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Home from './pages/Home';
import About from './pages/About';
import Browse from './pages/Browse';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <MyNav />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="browse" element={<Browse />} />
        <Route path="*" element={<ErrorPage /> } />
      </Routes>
      <MyFooter />
    </Router>
  );
}

export default App;
