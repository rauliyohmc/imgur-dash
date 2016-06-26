import { ActionTypes } from '../constants'
import _ from 'underscore'

const initialState = {
  topics: []
};

function getRandomTopics(topics) {
  return _.sample(topics, 5);
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOPICS_SUCCESS:
      return {...state, ...{topics: getRandomTopics(action.topics)}};
      return state;
    default:
      return state;
  }
};

// Selectors, that will return the data required by the UI

export const getTopicNames = (state) => {
  return state.topics.map(topic => topic.name);
};

export const getTopicIds = (state) => {
  return state.topics.map(topic => topic.id);
};

export default rootReducer;
