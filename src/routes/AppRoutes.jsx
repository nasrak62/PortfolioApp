import { Routes, Route } from "react-router-dom";
import HomePage from "../components/home_page/HomePage";
import { observer } from "mobx-react-lite";
import Login from "components/login/Login";
import Register from "components/register/Register";
import Transactions from "components/Transactions/Transactions";
import NewTransaction from "components/Transactions/new_transaction/NewTransaction";
import { useMemo } from "react";

const AppRoutes = observer(({ store }) => {
  const loggedIn = store?.token && store?.loggedIn;

  const loggedInRoutes = useMemo(() => {
    return (
      <>
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/transactions/new" element={<NewTransaction />} />
      </>
    );
  }, []);

  const loggedOutRoutes = useMemo(() => {
    return (
      <>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </>
    );
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      {loggedIn ? loggedInRoutes : loggedOutRoutes}
    </Routes>
  );
});

export default AppRoutes;
