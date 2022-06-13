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

//il TYPE è il nome della action che verrà passata al dispatch nel file context, mentre il PAYLOAD è il dato che passiamo al dispatch nel file context
const reducer = (state, { type, payload }) => {
  //uso lo switch perchè mi piace di più e secondo me è più pulito di mille mila if
  switch (type) {
    case DATA_FETCHING_STARTED:
      return { ...state, isLoading: true };

    case DATA_FETCHING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload.map((el) => {
          return { ...el, quantity: 0 };
        }),
      };

    case DATA_FETCHING_FAILED:
      return { ...state, isLoading: false, isError: true };

    case DELETE_ITEM:
      return {
        ...state,
        products: state.products.filter((el) => el._id !== payload),
      };

    case EMPTY_CART:
      return {
        ...state,
        products: [],
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((el) => {
          if (el._id === payload) {
            return { ...el, quantity: el.quantity + 1 };
          }
          return { ...el };
        }),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        products: state.products.map((el) => {
          if (el._id === payload && el.quantity > 0) {
            return { ...el, quantity: el.quantity - 1 };
          }
          return { ...el };
        }),
      };

    case TOTAL_PRICE:
      return {
        ...state,
        total: state.products.reduce(
          (prev, current) => prev + current.quantity * current.price,
          0
        ),
      };

    case TOTAL_CART:
      return {
        ...state,
        cart: state.products.reduce(
          (prev, current) => prev + current.quantity,
          0
        ),
      };
  }
  return state;
};

export default reducer;
