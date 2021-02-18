import React from 'react';
import './App.css';
import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import MinecraftPage from '../Pages/MinecraftPage';
import Header from '../Header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router basename="/">
      <Header />
      <Switch>
        <Route exact path="/" component={ MainPage }/>
        <Route exact path="/register" component={ RegisterPage }/>
        <Route exact path="/minecraft" component={ MinecraftPage }/>
      </Switch>
    </Router>
  );
}

export default App;
