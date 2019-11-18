import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from "redux-devtools-extension";
import persistanceMiddleware from '../middleware/persistance';
import { initSagas } from './initSagas';
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, persistanceMiddleware];

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

    initSagas(sagaMiddleware);
    return store;
}

export default getStore;