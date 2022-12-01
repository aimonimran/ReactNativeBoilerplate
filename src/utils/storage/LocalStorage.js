import LocalStorage from './local.storage';

class TokenStorage extends LocalStorage {}

const token = new TokenStorage('@token');

export default token;
