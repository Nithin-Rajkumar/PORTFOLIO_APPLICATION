// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/about';
import TemplateSelection from './components/TemplateSelection';
import Login from './components/Login';
import Signup from './components/Signup';
import SupportPage from './components/support';
import ProfilePage from './components/profile';
import Add from './components/select';
import Dash from './components/dash';
import Feedback from './components/Feedback';
const NotFound = () => {
  return <div>404 Page Not Found</div>;
};

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
 
          <Route path='/signup' element={<Signup></Signup>}/>
          <Route   path="/about" element={<About/>} />
          <Route   path="/templates" element={<TemplateSelection/>} />
          <Route   path="/home" element={<HomePage/>} />
          <Route   path="/support" element={<SupportPage/>} />
          <Route   path="/profile" element={<ProfilePage/>} />
          <Route path="/get" element={<Dash/>}/>
          <Route path='/feed' element={<Feedback/>}/>
          <Route path='/select/' element={<Add/>}/>
          <Route element={NotFound} />
          
        </Routes>
      </Router>
  );
};

export default App;
