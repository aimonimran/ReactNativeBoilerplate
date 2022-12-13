const localHost = 'http://192.168.1.153';
const liveHost = 'http://wrong-host';

export const host = __DEV__ ? localHost : liveHost;
