  
import { onLogin } from '../src/API/Api'
import { instance } from '../src/API/Api'
const initState = {
  token: null,
  userInfo: null,
};

const url = '/verify_mobile'

export const login = (params) => async (dispatch) => {
  const result = await instance.post(url, params)
};

export const verifyCode = (params) => async (dispatch) => {
  const result = await instance.post(url, params)
  console.log('result', result)
  dispatch({ type: "LOGIN", token: result?.data?.token, userInfo: result?.data?.userInfo?.[0] });
};


export default function authReducer(state = initState, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.token,
        userInfo: action.userInfo
      };
    case "LOGOUT":
      return{
        ...state,
        initState
      }
    default:
      return state;
  }
}