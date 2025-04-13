import { SET_TOP_DISCOUNTS } from "../actions/topDiscountsActions";

const initialState = {
  products: [],
};

const topDiscountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOP_DISCOUNTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default topDiscountsReducer;
