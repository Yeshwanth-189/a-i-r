import {
  SET_TOP_DISCOUNTS,
  SET_TOP_RATED,
  SET_HIDDEN_GEMS,
  SET_TOP_POPULAR,
} from "../actions/topDiscountsActions";

const initialState = {
  discounts: [],
  topRated: [],
  hiddenGems: [],
  topPopular: [],
};

const topDiscountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_DISCOUNTS:
      return { ...state, discounts: action.payload };
    case SET_TOP_RATED:
      return { ...state, topRated: action.payload };
    case SET_HIDDEN_GEMS:
      return { ...state, hiddenGems: action.payload };
    case SET_TOP_POPULAR:
      return { ...state, topPopular: action.payload };
    default:
      return state;
  }
};

export default topDiscountsReducer;
