import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    // SET_TITLE: (curState, text) => {
    //   return { title: text };
    // },
    // SET_DATE: (curState, text) => {
    //   return { date: text };
    // },
    // SET_LOCATION: (curState, text) => {
    //   return { location: text };
    // },
    // SET_PARAGRAPHS: (curState, text) => {
    //   return { listOfParagraphs: text };
    // },
    // SET_MEDIA: (curState, text) => {
    //   return { listOfMedia: text };
    // },
    // SET_PROFILE_PHOTO: (curState, text) => {
    //   return { profilePhoto: text };
    // },
    // dispatch("SET_NUM_UNOPENED_FEEDBACK", unopenedfeedback.unopenedfeedback);
    // dispatch("SET_NUM_TODO_REVIEWCOUNT", todoreviewcount.todoreview)

    SET_NUM_UNOPENED_FEEDBACK: (curState, val) => {
      return { numunopenedfeedback: val };
    },
    SET_NUM_TODO_REVIEWCOUNT: (curState, val) => {
      return { numtodoreview: val };
    },
  };

  initStore(actions, {
    numunopenedfeedback: 0,
    numtodoreview: 0,
  });
};

export default configureStore;
