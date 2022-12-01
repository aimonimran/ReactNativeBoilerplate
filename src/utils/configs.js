export const isDevelopment = process.env.NODE_ENV === 'development';

const localHost = '';
const liveHost = '';

export const host = isDevelopment ? localHost : liveHost;
