import { makeObservable, observable, action } from "mobx";
import { loadFromMemory, saveToMemory, STORAGE } from "utils/storage";

class Store {
  token = loadFromMemory(STORAGE.TOKEN) || ""; // load from storage
  loggedIn = loadFromMemory(STORAGE.LOGGED_IN) || false;

  constructor() {
    makeObservable(this, {
      token: observable,
      loggedIn: observable,
      login: action,
      logout: action,
    });
  }

  login(token) {
    this.token = token;
    this.loggedIn = true;

    saveToMemory(STORAGE.TOKEN, token);
    saveToMemory(STORAGE.LOGGED_IN, true);
  }

  logout() {
    this.token = "";
    this.loggedIn = false;

    saveToMemory(STORAGE.TOKEN, "");
    saveToMemory(STORAGE.LOGGED_IN, false);
  }
}

const store = new Store();
window.store = store;

export default store;
