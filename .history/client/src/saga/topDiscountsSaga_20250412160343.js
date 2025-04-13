import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TOP_DISCOUNTS,
  setTopDiscounts,
} from "../actions/topDiscountsActions";
import { getTopDiscounts } from "../api/topDiscountsApi";

function* handleFetchTopDiscounts() {
  try {
    const products = yield call(getTopDiscounts);
    yield put(setTopDiscounts(products));
  } catch (err) {
    console.error("Error fetching top discounts:", err);
  }
}

export function* watchTopDiscounts() {
  yield takeLatest(FETCH_TOP_DISCOUNTS, handleFetchTopDiscounts);
}
