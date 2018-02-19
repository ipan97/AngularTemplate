import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  _username = 'ipan97';
  _password = 'password';
  _isLogin = false;

  constructor() {
  }

  get isLogin(): boolean {
    return this._isLogin;
  }

  login(username: string, password: string) {
    if (this._username == username && this._password == password) {
      this._isLogin = true;
      localStorage.setItem('current_user', username);
    } else {
      console.log('username or password wrong');
    }
  }

  get currentUser() {
    return localStorage.getItem('current_user');
  }

  logout() {
    this._isLogin = false;
    localStorage.removeItem('current_user');
  }
}
