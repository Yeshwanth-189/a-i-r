import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import topDiscountsReducer from "../reducers/topDiscountsReducer";
import { watchTopDiscounts } from "../saga/topDiscountsSaga";

const rootReducer = combineReducers({
  topDiscounts: topDiscountsReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchTopDiscounts);
