const { spookyTypes } = require("./types");

const INCREMENT_STEP = "INCREMENT_STEP";
const NEW_SPOOKY_SOUND = "NEW_SPOOKY_SOUND";
//code actions here
const incrementStep = (steps) => {
  return {
    type: INCREMENT_STEP,
    steps,
  };
};

const createNewSpookySound = (spookySounds) => {
  return {
    type: NEW_SPOOKY_SOUND,
    spookySounds,
  };
};

module.exports = {
  incrementStep,
  createNewSpookySound,
};
/**export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
} */
