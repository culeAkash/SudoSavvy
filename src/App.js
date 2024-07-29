import React from "react";
import HomePage from "./Pages/HomePage";
import Game from "./Pages/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="bg-[#78C9F0]  min-h-screen">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/game" element={<Game />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment >
  );
}

export default App;
