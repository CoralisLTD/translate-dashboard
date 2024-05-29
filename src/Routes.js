import { Suspense } from "react";
import { Route, Routes, Navigate, Outlet, Link } from "react-router-dom";
import { Loading } from "../src/UI/src/Loading";
import { observer, inject } from "mobx-react";
import Login from "./pages/Login";
import ActivityLogs from "./pages/ActivityLogs";
import DailySummary from "./pages/DailySummary";
import DetailedDailyReport from "./pages/DetailedDailyReport";
import ReportHourPerProject from "./pages/ReportHourPerProject";
import DetailedMonthlyReport from "./pages/DetailedMonthlyReport";
import Main from "./pages/Main";
import Contacts from "./pages/Contacts";

const ProtectedRoute = ({ isAllowed, redirectPath = "/login", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const AppRoutes = ({ userStore }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          element={<ProtectedRoute isAllowed={userStore.isAuthenticated} />}>
          <Route path="/" element={<Main />} />
          <Route element={<Main />}>
            <Route exact path="/activityLogs" element={<ActivityLogs />} />
            <Route exact path="/dailySummary" element={<DailySummary />} />
            <Route
              exact
              path="/detailedDailyReport"
              element={<DetailedDailyReport />}
            />
            <Route
              exact
              path="/reportHourPerProject"
              element={<ReportHourPerProject />}
            />
            <Route
              exact
              path="/detailedMonthlyReport"
              element={<DetailedMonthlyReport />}
            />
            <Route
              exact
              path="/monthlyHourPresenceReport"
              element={<ActivityLogs />}
            />
            <Route
              exact
              path="/monthlyHourPresence"
              element={<ActivityLogs />}
            />
            <Route exact path="/contacts" element={<Contacts />} />
          </Route>
        </Route>
        <Route
          element={
            <ProtectedRoute
              redirectPath="/activityLogs"
              isAllowed={!userStore.isAuthenticated}
            />
          }>
          <Route exact key="login" path="/login" element={<Login />} />
          <Route path="/" element={<Navigate from="/" to="/login" />} />
          <Route path="*" element={<Navigate from="*" to="/login" />} />
        </Route>
      </Routes>
      <Link to={"/login"} style={{ display: "none" }}>
        linkToLogin
      </Link>
      <Link to={"/activityLogs"} style={{ display: "none" }}>
        linkToActivityLogs
      </Link>
      <Link to={"/dailySummary"} style={{ display: "none" }}>
        linkToDailySummary
      </Link>
      <Link to={"/detailedDailyReport"} style={{ display: "none" }}>
        linkToDetailedDailyReport
      </Link>
      <Link to={"/reportHourPerProject"} style={{ display: "none" }}>
        linkToReportHourPerProject
      </Link>
      <Link to={"/monthlyHourPresence"} style={{ display: "none" }}>
        linkToMonthlyHourPresenceReport
      </Link>
      <Link to={"/monthlyHourPresence"} style={{ display: "none" }}>
        linkToMonthlyHourPresence
      </Link>
      <Link to={"/contacts"} style={{ display: "none" }}>
        linkToContacts
      </Link>
    </Suspense>
  );
};

export default inject("userStore")(observer(AppRoutes));
