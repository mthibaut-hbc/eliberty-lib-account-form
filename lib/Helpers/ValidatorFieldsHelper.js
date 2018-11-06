'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//regex patterns and restrictions
var restrictions = {
  patterns: {
    mailformat: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    dateformat: /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
    zipcodeformat: /^([A-Z]+[A-Z]?\-)?[0-9]{1,2} ?[0-9]{3}$/ // Code postal au format 31 100 ou 31100
  },
  minStringLength: 2
};

/**
 *
 * @param type
 * @param value
 */
var isValidField = exports.isValidField = function isValidField(type, value) {

  switch (type) {
    case 'email':
    case 'username':
      if (value.length < restrictions.minStringLength || !restrictions.patterns.mailformat.test(value)) {
        return false;
      }
      break;
    case 'birthdate':
      if (value.length === 0 || !restrictions.patterns.dateformat.test(value)) {
        return false;
      }
      break;
    case 'phone':
      break;
    case 'movil':
      break;
    case 'firstname':
    case 'lastname':
    case 'address1':
    case 'address2':
    case 'zipCode':
    case 'city':
    case 'country':
    case 'password':
      if (value.length < restrictions.minStringLength) {
        return false;
      }
      break;
    default:
      return true;
  }
  return true;
};
//# sourceMappingURL=ValidatorFieldsHelper.js.map