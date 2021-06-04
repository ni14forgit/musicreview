import {
  accounts_checkexistence,
  accounts_login,
  accounts_logout,
} from "./paths/accounts";
import {
  aws_upload_photo,
  aws_upload_songs,
  aws_delete_photo,
  aws_retrieve_song,
  aws_delete_song,
  aws_retrieve_photo,
} from "./paths/aws";
import {
  profiles_register,
  profiles_edits_name,
  profiles_edits_professions,
  profiles_edits_genres,
  profiles_edits_sociallinks,
  profiles_edits_profilephoto,
  profiles_edits_addsong,
  profiles_edits_deletesong,
  profiles_edits_addaccomplishment,
  profiles_edits_deleteaccomplishment,
  profiles_edits_accomplishment,
  profiles_retrieve,
} from "./paths/profiles";

import {
  users_submission_retrieve,
  users_submission_submit,
  users_review_retrieve,
  users_review_submit,
} from "./paths/users";

export {
  accounts_checkexistence,
  accounts_login,
  accounts_logout,
  aws_upload_photo,
  aws_upload_songs,
  aws_delete_photo,
  aws_retrieve_song,
  aws_delete_song,
  aws_retrieve_photo,
  profiles_register,
  profiles_edits_name,
  profiles_edits_professions,
  profiles_edits_genres,
  profiles_edits_sociallinks,
  profiles_edits_profilephoto,
  profiles_edits_addsong,
  profiles_edits_deletesong,
  profiles_edits_addaccomplishment,
  profiles_edits_deleteaccomplishment,
  profiles_edits_accomplishment,
  profiles_retrieve,
  users_submission_retrieve,
  users_submission_submit,
  users_review_retrieve,
  users_review_submit,
};
