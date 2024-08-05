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
import TablesColumns from "./pages/TablesColumns";
import Programs from "./pages/Programs";
import Titles from "./pages/Titles";
import Executions from "./pages/Executions";
import FormColumns from "./pages/FormColumns";
import EpColumns from "./pages/EpColumns";

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
        <Route exact path="/tablesColumns/:page?" element={<TablesColumns />} />
        <Route exact path="/titles/:page?" element={<Titles />} />
        <Route exact path="/programs/:page?" element={<Programs />} />
        <Route exact path="/executions/:page?" element={<Executions />} />
        <Route exact path="/formColumns/:page?" element={<FormColumns />} />
        <Route exact path="/epColumns/:page?" element={<EpColumns />} />
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
        linkToTables
      </Link>
      <Link to={"/tablesColumns"} style={{ display: "none" }}>
        linkToTablesColumns
      </Link>
      <Link to={"/titles"} style={{ display: "none" }}>
        linkToTitles
      </Link>
      <Link to={"/programs"} style={{ display: "none" }}>
        linkToPrograms
      </Link>
      <Link to={"/executions"} style={{ display: "none" }}>
        linkToExecutions
      </Link>
      <Link to={"/formColumns"} style={{ display: "none" }}>
        linkToFormColumns
      </Link>
      <Link to={"/epColumns"} style={{ display: "none" }}>
        linkToEpColumns
      </Link>
    </Suspense>
  );
};

export default AppRoutes;
