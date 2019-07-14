/**
 * Utiltiy function for reducers
 * @param {*} oldObject - object
 * @param {*} updatedProperties - object
 */
export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};

/**
 * Utility function to validate form inputs
 * @param {*} value 
 * @param {*} rules 
 */
export const checkFormInputValidity = (value, rules) => {
  let isValid = true;

  if (rules.required) {
    isValid = (value && value.trim() !== '') && isValid;
  }

  if (rules.minLength) {
    isValid = (value && value.length >= rules.minLength) && isValid;
  }

  if (rules.maxLength) {
    isValid = (value && value.length <= rules.maxLength) && isValid;
  }

  if (rules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(value) && isValid
  }

  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid
  }

  return isValid;
}
