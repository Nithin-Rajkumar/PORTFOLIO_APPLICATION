// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/about';
import TemplateSelection from './components/TemplateSelection';
import Login from './components/Login';
import Signup from './components/Signup';

const NotFound = () => {
  return <div>404 Page Not Found</div>;
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route   path="/about" element={<About/>} />
          <Route   path="/TemplateSelection" element={<TemplateSelection/>} />
          <Route   path="/login" element={<Login/>} />
          <Route   path="/signup" element={<Signup/>} />
          <Route element={NotFound} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
