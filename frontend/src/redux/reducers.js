import { SETTOKEN} from "./Actions";
const initialState = {
  token:'test'
};
function userReducer(state=initialState, action) {
  switch (action.type) {
    case SETTOKEN:
      return { ...state, token: action.payload };
 
    default:
      return state;
  }
}
export default userReducer;
