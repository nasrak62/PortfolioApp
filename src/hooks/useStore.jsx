import { StoreContext } from "App";
import { useContext } from "react";

const useStore = () => {
  const store = useContext(StoreContext);

  return store;
};

export default useStore;
