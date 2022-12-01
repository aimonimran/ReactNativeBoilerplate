export const regex = {
  passwordRegex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
  cellRegex:
    /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm,
};

export const messages = {
  min: field => `${field} must be at least 3 characters long`,
  max: field => `${field} must be at most 50 characters long or less`,
  password: field =>
    `${field} must be 6 characters long and must contain at least one uppercase/lowercase/digit`,
  match: field => `${field} must match`,
  valid: field => `${field} is not valid`,
  required: field => `${field} is required`,
};
