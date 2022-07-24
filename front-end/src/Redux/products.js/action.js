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

      .then((r) => dispatch(FetchDataSucc(r.data)))

      .catch((e) => dispatch(FetchDataFail(e.data)));
  };
};
