import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { User } from '../models/user';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  public static readonly USER_PATH = 'users';
  private usersRef: firebase.database.Reference;

  constructor(
    private db: AngularFireDatabase
  ) {
    this.usersRef = this.db.database.ref(UserService.USER_PATH);
  }

  insert(user: User) {
    user.createdAt = <number> firebase.database.ServerValue.TIMESTAMP;
    this.usersRef.push(user)
      .then((result: any) => {
        console.log("saved!", result.key);
      });
  }

  insertIfNotExist(user: User) {
    this.usersRef.orderByChild('email').equalTo(user.email).once("value", snapshot => {
      if (snapshot.exists()) {
        const userData = snapshot.val();
        console.log("exists!", userData);
      } else {
        this.insert(user);
      }
    });
  }
  
}
