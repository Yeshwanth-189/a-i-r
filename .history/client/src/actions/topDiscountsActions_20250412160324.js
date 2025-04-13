export const FETCH_TOP_DISCOUNTS = "FETCH_TOP_DISCOUNTS";
export const SET_TOP_DISCOUNTS = "SET_TOP_DISCOUNTS";

export const fetchTopDiscounts = () => ({
  type: FETCH_TOP_DISCOUNTS,
});

export const setTopDiscounts = (products) => ({
  type: SET_TOP_DISCOUNTS,
  payload: products,
});
