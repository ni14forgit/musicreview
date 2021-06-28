import { PROFILES_URL } from "./BASE";

const profiles_register = PROFILES_URL + "/register";

// EDIT
const PROFILES_EDITS = PROFILES_URL + "/edits";
const profiles_edits_name = PROFILES_EDITS + "/name";
const profiles_edits_genres = PROFILES_EDITS + "/genres";
const profiles_edits_professions = PROFILES_EDITS + "/professions";
const profiles_edits_sociallinks = PROFILES_EDITS + "/sociallinks";
const profiles_edits_profilephoto = PROFILES_EDITS + "/profilephoto";
const profiles_edits_deletesong = PROFILES_EDITS + "/deletesong";
const profiles_edits_addsong = PROFILES_EDITS + "/addsong";
const profiles_edits_addaccomplishment = PROFILES_EDITS + "/addaccomplishment";
const profiles_edits_deleteaccomplishment =
  PROFILES_EDITS + "/deleteaccomplishment";
const profiles_edits_accomplishment = PROFILES_EDITS + "/accomplishment";

// RETRIEVE

const profiles_retrieve = PROFILES_URL + "/retrieve";
const profiles_retrieve_other = PROFILES_URL + "/retrieve/other";

export {
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
  profiles_retrieve_other,
};
