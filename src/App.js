import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import {Home} from './components/home'
import {Error} from './components/error'
import {Launches} from './components/launches'
import {RocketDetails} from './components/rocketDetails'
import './assets/scss/index.scss'

function App() {
  return (
      <React.Fragment>
        <BrowserRouter >
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route exact path="/launches/:page" element={<Launches />} />
          <Route exact path="/launchDetails/:launch_id" element={<RocketDetails />} />
          <Route  path='*' element={<Error />} /> 
        </Routes>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App