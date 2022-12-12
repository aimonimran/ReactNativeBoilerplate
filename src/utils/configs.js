export const {REACT_APP_BASE_URL: BASE_URL} = process.env;

export const isDevelopment = process.env.NODE_ENV === 'development';

const localHost = '';
const liveHost = '';

export const host = isDevelopment ? localHost : liveHost;
