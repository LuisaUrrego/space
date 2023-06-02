import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../Components/layout/Layout";
import Home from "../Components/home/Home";
import Crew from "../Components/crew/Crew";
import Destination from "../Components/destination/Destination";
import Technology from "../Components/technology/Technology";
import CrewSafe from "../Components/crewSafe/CrewSafe"


const AppRouter = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/space"} element={<Layout />}>
            <Route index element={<Home />} />
            
                <Route path="crew" element={<CrewSafe />} />
                <Route path="destination" element={<Destination />} />
                <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;