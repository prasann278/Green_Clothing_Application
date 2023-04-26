import {ADD_TO_CART, REMOVE_FROM_CART} from '../ActionType';

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];

    case REMOVE_FROM_CART:
      const deletedArray1 = state.filter((item, index) => {
        return index !== action.payload;
      });

      return deletedArray1;
    default:
      return state;
  }
};
