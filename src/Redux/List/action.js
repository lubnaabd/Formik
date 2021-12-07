import { ADD_ITEM, DELETE_ITEM,GET_ITEM_BY_ID } from "./constant";

export const addItem = (payload) => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export const getItemById = (payload) => {
  return {
    type: GET_ITEM_BY_ID,
    payload,
  };
};