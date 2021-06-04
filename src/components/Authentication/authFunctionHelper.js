// taken from ui.dev, thanks!

const checkValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const checkPasswordsMatch = (passwordOne, passwordTwo) => {
  return passwordOne === passwordTwo;
};

const checkValidPassword = (password) => {
  // need to improve

  if (password.length >= 1) {
    return true;
  }
  return false;
};

export { checkValidEmail, checkPasswordsMatch, checkValidPassword };
