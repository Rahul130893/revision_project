import  Axios  from "axios";


export const SIGNIN_REQ = "SIGNIN_REQ";
export const SIGNIN_SUCC = "SIGNIN_SUCC";
export const SIGNIN_FAIL = "SIGNIN_FAIL";

 const signInReq = () => {
    return {
        type: SIGNIN_REQ,

    }
}
  const signInSucc = (payload) => {
  return {
      type: SIGNIN_SUCC,
      payload
  };
};
  const signInFail = (payload) => {
  return {
      type: SIGNIN_FAIL,
      payload
  };
};

const signIn = (payload) => (dispatch) => {
    dispatch(signInReq())
    Axios.post("https://projects13.herokuapp.com/login", payload)
      .then((r) => dispatch(signInSucc(r.data.token)))
      .catch((e) => dispatch(signInFail(e.data)))

}

export default signIn