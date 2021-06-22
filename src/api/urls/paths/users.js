import { USERS_URL } from "./BASE";

// SUBMISSION

const USERS_SUBMISSION = USERS_URL + "/submissions";
const users_submission_submit = USERS_SUBMISSION + "/submit";
const users_submission_retrieve = USERS_SUBMISSION + "/retrieve";

const USERS_REVIEW = USERS_URL + "/reviews";
const users_review_submit = USERS_REVIEW + "/submit";
const users_review_retrieve = USERS_REVIEW + "/retrieve";
const users_review_statictotalretrieve = USERS_REVIEW + "/statictotalretrieve";
const users_review_submitfeedbackscore = USERS_REVIEW + "/submitfeedbackscore";

const USERS_MATCH = USERS_URL + "/match";
const users_match = USERS_MATCH + "/ss";

const USERS_MENU = USERS_URL + "/menu";
const users_menu_feeback = USERS_MENU + "/feedback";
const users_menu_musictoreview = USERS_MENU + "/musictoreview";

export {
  users_submission_retrieve,
  users_submission_submit,
  users_review_retrieve,
  users_review_submit,
  users_review_statictotalretrieve,
  users_review_submitfeedbackscore,
  users_match,
  users_menu_feeback,
  users_menu_musictoreview,
};
