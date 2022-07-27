import Axios from "axios";
import * as types from "./actionTypes";

const FetchDataReq = (payload) => {
  return {
    type: types.FETCH_DATA_REQ,
    payload,
  };
};
const FetchDataSucc = (payload) => {
  return {
    type: types.FETCH_DATA_SUCC,
    payload,
  };
};
const FetchDataFail = (payload) => {
  return {
    type: types.FETCH_DATA_FAIL,
    payload,
  };
};

export const FetchData = (payload) => {
  return (dispatch) => {
    dispatch(FetchDataReq);
  
    Axios.get("https://projects13.herokuapp.com/product", {
      params: {
        ...payload,
      },
    })

      .then((r) => dispatch(FetchDataSucc(r.data.products)))

      .catch((e) => dispatch(FetchDataFail(e)));
  };
    
};

const Single_FetchDataReq = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_REQ,
    payload,
  };
};
const Single_FetchDataSucc = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_SUCC,
    payload,
  };
};
const Single_FetchDataFail = (payload) => {
  return {
    type: types.SINGLE_FETCH_DATA_FAIL,
    payload,
  };
};

export const Single_FetchData = (_id) => {
  return (dispatch) => {
    dispatch(Single_FetchDataReq())
 
  
    Axios.get(`https://projects13.herokuapp.com/product/${_id}`)
      .then((r) => dispatch(Single_FetchDataSucc(r.data)))
      
      .catch((e) => Single_FetchDataFail(e.data));
  }
};

const Add_Pro_Req = (payload) => {
  return {
    type: types.ADD_PRO_CART_REQ,
    payload,
  };
};
const Add_Pro_Succ = (payload) => {
  return {
    type: types.ADD_PRO_CART_SUCC,
    payload,
  };
};
const Add_Pro_Fail = (payload) => {
  return {
    type: types.ADD_PRO_CART_FAIL,
    payload,
  };
};

 export const AddProCart = (product) => (dispatch) => {
  dispatch(Add_Pro_Req());
  Axios.post("https://projects13.herokuapp.com/cart", product)
    .then((r) => dispatch(Add_Pro_Succ(r.data)))
    .catch((e) => dispatch(Add_Pro_Fail(e.data)));
};

