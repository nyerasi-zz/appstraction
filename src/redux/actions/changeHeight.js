const TYPES = {
  CHANGED_HEIGHT: "CHANGED_HEIGHT"
};

const changeHeight = data => dispatch => {
  return dispatch({ type: TYPES.CHANGED_HEIGHT, payload: data });
};

export { changeHeight };
