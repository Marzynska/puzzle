import React, {component} from 'react';
import {createRoot} from "react-dom/client";
import {Route, Routes, Link, NavLink, Outlet, BrowserRouter} from "react-router-dom";
import Header from "./components/Header.jsx";
import GameField from "./components/GameField.jsx";
import SideBar from "./components/SideBar.jsx";
import MainView from "./views/MainView.jsx";
import Game from "./views/Game.jsx";
import Instruction from "./views/Instruction.jsx";
import NotFound from "./views/NotFound.jsx";
import BestScore from "./views/BestScore.jsx";
import HireMe from "./views/HireMe.jsx";

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path='/' element={<MainView />} />
              <Route path='/game' element={<Game />} />
              <Route path='/instruction' element={<Instruction />} />
              <Route path='/bestScore' element={<BestScore />} />
              <Route path='/hire' element={<HireMe />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
