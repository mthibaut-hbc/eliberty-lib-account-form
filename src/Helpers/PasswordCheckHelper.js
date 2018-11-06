/**
 * Generic colors for progress bar password
 * @type {{ grayColor: string,
 *          greenColor: string,
 *          stateGreenColor: string,
 *          stateYellowColor: string,
 *          stateOrangeColor: string,
 *          stateRedColor: string }}
 */
const colors = {
  grayColor: "#b0b0b0",
  greenColor: "#18c229",
  stateGreenColor: "#04AC00",
  stateYellowColor: "#FFD700",
  stateOrangeColor: "#F07424",
  stateRedColor: "#E93838",
};

/**
 * Regex patterns and restrictions
 * @type {{const: RegExp}}
 */
const patterns = {
  digits: /[0-9]/,
  minLength: 8,
  upperCases: /[A-Z]/,
};

/**
 * Check Strength Password
 * @param password
 */
export const checkStrengthPassword = (password) => {

  const newPasswordElement = document.querySelector('.new-password');
  // items for validation password
  const item1 = newPasswordElement.querySelector('.pwd-item1');
  const item2 = newPasswordElement.querySelector('.pwd-item2');
  const item3 = newPasswordElement.querySelector('.pwd-item3');

  let strength = 0;

  if (password.length >= 1) {
    strength += 25;

    if (password.length >= patterns.minLength) {
      strength += 25;
      item1.style.color = colors.greenColor;
    } else {
      item1.style.color = colors.grayColor;
    }

    if (patterns.upperCases.test(password)) {
      strength += 25;
      item2.style.color = colors.greenColor;
    } else {
      item2.style.color = colors.grayColor;
    }

    if (patterns.digits.test(password)) {
      strength += 25;
      item3.style.color = colors.greenColor;
    } else {
      item3.style.color = colors.grayColor;
    }

    if ((password.length >= patterns.minLength) && (patterns.upperCases.test(password)) && (patterns.digits.test(password))) {
      strength = 100;
    }

  } else {
    strength = 0;
    // initialize color list required password
    item1.style.color = colors.grayColor;
    item2.style.color = colors.grayColor;
    item3.style.color = colors.grayColor;
  }

  changeProgressbarPassword(strength);
};

/**
 * Change style for Progressbar Password
 * @param strength
 */
export const changeProgressbarPassword = (strength) => {

  const score = document.querySelector('.progress-bar');

  switch (strength) {
    case 25:
      score.style.width = "25%";
      score.style.backgroundColor = colors.stateRedColor;
      break;
    case 50:
      score.style.width = "50%";
      score.style.backgroundColor = colors.stateOrangeColor;
      break;
    case 75:
      score.style.width = "75%";
      score.style.backgroundColor = colors.stateYellowColor;
      break;
    case 100:
      score.style.width = "calc(100% - 40px)";
      score.style.backgroundColor = colors.stateGreenColor;
      break;
    default:
      score.style.width = "0";
      score.style.background = "none";
      break;
  }
};

/**
 * Validation Second Password equality first password
 * @param firstPassword
 * @param secondPassword
 * @returns {boolean}
 */
export const checkPasswordConfirm = (firstPassword, secondPassword) => (
  firstPassword  === secondPassword
);