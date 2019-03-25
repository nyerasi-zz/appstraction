import INITIAL_STATE from "../initialState";

export default function(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case "CHANGED_HEIGHT":
      return { ...state, height: action.payload };
    default:
      return state;
  }
}
