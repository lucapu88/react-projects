import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_SUCCESS,
  DATA_FETCHING_FAILED,
  DELETE_ITEM,
  EMPTY_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  TOTAL_PRICE,
  TOTAL_CART,
} from './actions';
import axios from 'axios';
const url = 'https://react--course-api.herokuapp.com/api/v1/data/cart';

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  };

  const emptyCart = () => {
    dispatch({ type: EMPTY_CART });
  };

  const increaseQuantity = (_id) => {
    dispatch({ type: INCREASE_QUANTITY, payload: _id });
  };

  const decreaseQuantity = (_id) => {
    dispatch({ type: DECREASE_QUANTITY, payload: _id });
  };

  const totalPrice = () => {
    dispatch({ type: TOTAL_PRICE });
  };
  const totalCart = () => {
    dispatch({ type: TOTAL_CART });
  };

  const fetchData = async () => {
    dispatch({ type: DATA_FETCHING_STARTED });
    try {
      const response = await axios.get(url);
      dispatch({
        type: DATA_FETCHING_SUCCESS,
        payload: response.data.data,
      });
    } catch (err) {
      dispatch({ type: DATA_FETCHING_FAILED });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    totalPrice();
    totalCart();
  }, [state.products]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
        emptyCart,
        increaseQuantity,
        decreaseQuantity,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
