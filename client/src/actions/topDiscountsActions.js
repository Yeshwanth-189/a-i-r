// === Action Types ===
export const FETCH_TOP_DISCOUNTS = "FETCH_TOP_DISCOUNTS";
export const SET_TOP_DISCOUNTS = "SET_TOP_DISCOUNTS";

export const FETCH_TOP_RATED = "FETCH_TOP_RATED";
export const SET_TOP_RATED = "SET_TOP_RATED";

export const FETCH_HIDDEN_GEMS = "FETCH_HIDDEN_GEMS";
export const SET_HIDDEN_GEMS = "SET_HIDDEN_GEMS";

export const FETCH_TOP_POPULAR = "FETCH_TOP_POPULAR";
export const SET_TOP_POPULAR = "SET_TOP_POPULAR";

// === Action Creators ===
export const fetchTopDiscounts = () => ({ type: FETCH_TOP_DISCOUNTS });
export const setTopDiscounts = (products) => ({
  type: SET_TOP_DISCOUNTS,
  payload: products,
});

export const fetchTopRated = () => ({ type: FETCH_TOP_RATED });
export const setTopRated = (products) => ({
  type: SET_TOP_RATED,
  payload: products,
});

export const fetchHiddenGems = () => ({ type: FETCH_HIDDEN_GEMS });
export const setHiddenGems = (products) => ({
  type: SET_HIDDEN_GEMS,
  payload: products,
});

export const fetchTopPopular = () => ({ type: FETCH_TOP_POPULAR });
export const setTopPopular = (products) => ({
  type: SET_TOP_POPULAR,
  payload: products,
});
