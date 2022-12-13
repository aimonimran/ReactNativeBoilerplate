import LocalStorage from './LocalStorage';

class TokenStorage extends LocalStorage {}

const token = new TokenStorage('@token');

export default token;
