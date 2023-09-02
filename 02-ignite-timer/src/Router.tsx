import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import History from "./pages/History";
import { DefautLayout } from "./layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefautLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
