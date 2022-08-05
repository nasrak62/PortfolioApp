import { Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import loadable from 'utils/loadable';

// import HomePage from '../components/home_page/HomePage';
// import Login from 'components/login/Login';
// import Register from 'components/register/Register';
// import Transactions from 'components/Transactions/Transactions';
// import NewTransaction from 'components/Transactions/new_transaction/NewTransaction';
// import Weights from 'components/weights/Weights';
// import NewWeight from 'components/weights/NewWeight/NewWeight';
// import EditWeight from 'components/weights/EditWeight/EditWeight';
// import Foods from 'components/foods/Foods';
// import NewFood from 'components/foods/create/NewFood';
// import EditFood from 'components/foods/update/EditFood';
// import Meals from 'components/meals/Meals';
// import NewMeal from 'components/meals/create/NewMeal';

const HomePage = loadable(() =>
  import(/* webpackChunkName: "HomePage" */ 'components/home_page/HomePage'),
);
const Login = loadable(() =>
  import(/* webpackChunkName: "Login" */ 'components/login/Login'),
);
const Register = loadable(() =>
  import(/* webpackChunkName: "Register" */ 'components/register/Register'),
);

const Transactions = loadable(() =>
  import(
    /* webpackChunkName: "Transactions" */ 'components/Transactions/Transactions'
  ),
);

const NewTransaction = loadable(() =>
  import(
    /* webpackChunkName: "NewTransaction" */ 'components/Transactions/new_transaction/NewTransaction'
  ),
);

const Weights = loadable(() =>
  import(/* webpackChunkName: "Weights" */ 'components/weights/Weights'),
);

const NewWeight = loadable(() =>
  import(
    /* webpackChunkName: "NewWeight" */ 'components/weights/NewWeight/NewWeight'
  ),
);

const EditWeight = loadable(() =>
  import(
    /* webpackChunkName: "EditWeight" */ 'components/weights/EditWeight/EditWeight'
  ),
);

const Foods = loadable(() =>
  import(/* webpackChunkName: "Foods" */ 'components/foods/Foods'),
);

const NewFood = loadable(() =>
  import(/* webpackChunkName: "NewFood" */ 'components/foods/create/NewFood'),
);

const EditFood = loadable(() =>
  import(/* webpackChunkName: "EditFood" */ 'components/foods/update/EditFood'),
);

const Meals = loadable(() =>
  import(/* webpackChunkName: "Meals" */ 'components/meals/Meals'),
);

const NewMeal = loadable(() =>
  import(/* webpackChunkName: "NewMeal" */ 'components/meals/create/NewMeal'),
);

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
        <Route exact path="/meals" element={<Meals />} />
        <Route exact path="/meals/new" element={<NewMeal />} />
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
