import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }

  verifyUser() {
    return this.storage.get('username');
  }
}