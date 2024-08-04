import { Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Loading } from "../src/UI/src/Loading";
import Proceedures from "./pages/Proceedures";
import Screens from "./pages/Screens";
import Home from "./pages/Home";
import Parameteres from "./pages/Parameteres";
import Enteties from "./pages/Enteties";
import Columns from "./pages/Columns";
import Tables from "./pages/Tables";

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route exact path="/proceedures/:page?" element={<Proceedures />} />
        <Route exact path="/screens/:page?" element={<Screens />} />
        <Route exact path="/parameters/:page?" element={<Parameteres />} />
        <Route exact path="/enteties/:page?" element={<Enteties />} />
        <Route exact path="/columns/:page?" element={<Columns />} />
        <Route exact path="/tables/:page?" element={<Tables />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Link to={"/proceedures"} style={{ display: "none" }}>
        linkToproceedures
      </Link>
      <Link to={"/screens"} style={{ display: "none" }}>
        linkToScreens
      </Link>
      <Link to={"/parameteres"} style={{ display: "none" }}>
        linkToParameteres
      </Link>
      <Link to={"/proceedures"} style={{ display: "none" }}>
        linkToLogin
      </Link>
      <Link to={"/enteties"} style={{ display: "none" }}>
        linkToEnteties
      </Link>
      <Link to={"/columns"} style={{ display: "none" }}>
        linkToColumns
      </Link>
      <Link to={"/tables"} style={{ display: "none" }}>
        linkToTablesns
      </Link>
    </Suspense>
  );
};

export default AppRoutes;
