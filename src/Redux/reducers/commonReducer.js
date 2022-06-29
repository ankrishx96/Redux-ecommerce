import { SELECTED_PRODUCTS, SET_PRODUCTS } from "../actions/products";

const intitialState = {
  products: []
};

export const commonReducer = (state = intitialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state,products:action.payload}

    default:
      return state;
  }
};
