import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-dom";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={Home}></Route>
        <Route exact path="/:id" element={Login}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;