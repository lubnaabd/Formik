import { ADD_ITEM, DELETE_ITEM } from "./constant";

export const listReducer = (initialState = { list: [], error: "" }, action) => {

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...initialState,
        list: [action.payload, ...initialState.list],
      };
    case DELETE_ITEM:
      return {
        ...initialState,
        list: initialState.list.filter(
          (elemnt) => elemnt.id !== action.payload.id
        ),
      };
    default:
      return initialState;
  }
};
