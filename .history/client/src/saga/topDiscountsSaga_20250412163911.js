import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  FETCH_TOP_DISCOUNTS,
  FETCH_TOP_RATED,
  FETCH_HIDDEN_GEMS,
  FETCH_TOP_POPULAR,
  setTopDiscounts,
  setTopRated,
  setHiddenGems,
  setTopPopular,
} from "../actions/topDiscountsActions";

import {
  getTopDiscounts,
  getTopRated,
  getHiddenGems,
  getTopPopular,
} from "../api/topDiscountsApi";

// === Sagas ===
function* handleFetchTopDiscounts() {
  try {
    const data = yield call(getTopDiscounts);
    yield put(setTopDiscounts(data));
  } catch (err) {
    console.error("Error fetching top discounts:", err);
  }
}

function* handleFetchTopRated() {
  try {
    const data = yield call(getTopRated);
    yield put(setTopRated(data));
  } catch (err) {
    console.error("Error fetching top rated:", err);
  }
}

function* handleFetchHiddenGems() {
  try {
    const data = yield call(getHiddenGems);
    yield put(setHiddenGems(data));
  } catch (err) {
    console.error("Error fetching hidden gems:", err);
  }
}

function* handleFetchTopPopular() {
  try {
    const data = yield call(getTopPopular);
    yield put(setTopPopular(data));
  } catch (err) {
    console.error("Error fetching top popular:", err);
  }
}

export function* watchTopDiscounts() {
  yield all([
    takeLatest(FETCH_TOP_DISCOUNTS, handleFetchTopDiscounts),
    takeLatest(FETCH_TOP_RATED, handleFetchTopRated),
    takeLatest(FETCH_HIDDEN_GEMS, handleFetchHiddenGems),
    takeLatest(FETCH_TOP_POPULAR, handleFetchTopPopular),
  ]);
}
