import React, {component} from 'react';
import {createRoot} from "react-dom/client";
import {Route, Routes, Link, NavLink, Outlet, BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import MainView from "./views/MainView.jsx";
import NotFound from "./views/NotFound.jsx";
import BestScore from "./views/BestScore.jsx";
import HireMe from "./views/HireMe.jsx";
import HowToPlay from "./views/HowToPlay.jsx";
import Game from "./views/Game.jsx";

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<MainView />} />
              <Route path='/game' element={<Game />} />
              <Route path='/how-to-play' element={<HowToPlay />} />
              <Route path='/bestScore' element={<BestScore />} />
              <Route path='/hire' element={<HireMe />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
