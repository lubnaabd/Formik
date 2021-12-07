import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, GET_ITEM_BY_ID } from "./constant";

export const listReducer = (initialState = { list: [],editList:[],isisEditing:false, error: "" }, action) => {
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
    case GET_ITEM_BY_ID:
      return {
        ...initialState,
        isEditing:true,
        editList: initialState.list.find(
          (elemnt) => elemnt.id === action.payload.id
        ),
      };
    // case EDIT_ITEM:
    // return {
    //   ...initialState,
    //   contents: initialState.lid.map(
    //       (elemnt) => elemnt.id === action.payload.id? {...elemnt, : action.payload}
    //                               : elemnt
    //   )};
    default:
      return initialState;
  }
};
