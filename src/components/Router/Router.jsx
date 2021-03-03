import React from 'react';
import MainPage from '../Pages/MainPage';
import RegisterPage from '../Pages/RegisterPage';
import MinecraftPage from '../Pages/MinecraftPage';
import GamePage from '../Pages/GamePage';
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/" component={ MainPage }/>
          <Route exact path="/register" component={ RegisterPage }/>
          <Route exact path="/minecraft" component={ MinecraftPage }/>
          <Route exact path="/game" component={ GamePage }/>
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router;