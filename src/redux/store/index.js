import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers";

const middleware = [];

const getCompose = () => {
    if (process.env.NODE_ENV.trim() !== "production") {
      return composeWithDevTools(applyMiddleware(...middleware));
    } else {
      return applyMiddleware(...middleware);
    }
};

const getStore = () => {
    const store = createStore(
        rootReducer,
        {},
        getCompose()
    );

    return store;
}

export default getStore;