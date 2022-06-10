import { Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

import HomePage from "../components/home_page/HomePage";
import Login from "components/login/Login";
import Register from "components/register/Register";
import Transactions from "components/Transactions/Transactions";
import NewTransaction from "components/Transactions/new_transaction/NewTransaction";
import Weights from "components/weights/Weights";
import NewWeight from "components/weights/NewWeight/NewWeight";
import EditWeight from "components/weights/EditWeight/EditWeight";
import Foods from "components/foods/Foods";
import NewFood from "components/foods/create/NewFood";
import EditFood from "components/foods/update/EditFood";

const AppRoutes = observer(({ store }) => {
  const loggedIn = store?.token && store?.loggedIn;

  const loggedInRoutes = useMemo(() => {
    return (
      <>
        <Route exact path="/transactions" element={<Transactions />} />
        <Route exact path="/weights" element={<Weights />} />
        <Route exact path="/weights/new" element={<NewWeight />} />
        <Route exact path="/weights/edit" element={<EditWeight />} />
        <Route exact path="/transactions/new" element={<NewTransaction />} />
        <Route exact path="/foods" element={<Foods />} />
        <Route exact path="/foods/new" element={<NewFood />} />
        <Route exact path="/foods/edit/:id" element={<EditFood />} />
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
