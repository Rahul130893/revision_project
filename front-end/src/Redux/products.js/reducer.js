import * as types from "./actionTypes";

const initial = {
  products: [],
  error: "",
  currentProduct: {},
  loading: false,
  cart: [],
};


const ProReducer = (state = initial, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.FETCH_DATA_REQ:
            return {
                ...state,
                error: "",
                loading: true,
            };
        case types.FETCH_DATA_SUCC:
            return {
                ...state,
                products: payload,
                error: "",
                loading: false,
            };
        case types.FETCH_DATA_FAIL:
            return {
                ...state,

                error: payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default ProReducer