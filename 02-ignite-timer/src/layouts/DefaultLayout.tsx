import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const DefautLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
