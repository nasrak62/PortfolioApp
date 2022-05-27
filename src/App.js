import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/navbar/NavBar";
import { createContext } from "react";
import { observer } from "mobx-react-lite";

export const StoreContext = createContext();

const App = observer(({ store }) => {
  // console.log(store);

  return (
    <StoreContext.Provider value={store}>
      <Router>
        <NavBar />
        <AppRoutes store={store} />
      </Router>
    </StoreContext.Provider>
  );
});

export default App;
