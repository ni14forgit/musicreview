import { ACCOUNTS_URL } from "./BASE";

const accounts_checkexistence = ACCOUNTS_URL + "/checkexistence";
const accounts_login = ACCOUNTS_URL + "/login";
const accounts_logout = ACCOUNTS_URL + "/logout";
const accounts_count = ACCOUNTS_URL + "/count";

const ACCOUNTS_SESSION = ACCOUNTS_URL + "/session";

const accounts_session_isloggedin = ACCOUNTS_SESSION + "/isloggedin";
const accounts_session_accesssongfeedback =
  ACCOUNTS_SESSION + "/accesssongfeedback";
const accounts_session_accesssongtoreview =
  ACCOUNTS_SESSION + "/accesssongtoreview";

export {
  accounts_checkexistence,
  accounts_login,
  accounts_logout,
  accounts_count,
  accounts_session_isloggedin,
  accounts_session_accesssongfeedback,
  accounts_session_accesssongtoreview,
};
