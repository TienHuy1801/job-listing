import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from './reducer';
import rootSaga from "./saga";

const composeEnhancer = composeWithDevTools({});

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;