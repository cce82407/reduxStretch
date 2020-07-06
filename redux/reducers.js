const { spookyTypes } = require("./types");

const initialState = {
  steps: 0,
  spookySounds: [],
  // code initial state here
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

module.exports = rootReducer;
