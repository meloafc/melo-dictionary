import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.getUserEmail());
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  getUserEmail() {
    let email = 'guest';
    if(this.userDetails) {
      email = this.userDetails.email;
    }
    return email;
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    ).then(
      (data) => {
        let user = new User(data.user);
        this.userService.insertIfNotExist(user);
      }
    );
  }

  isLoggedIn(): Observable<boolean> {
    var subject = new Subject<boolean>();

    this.user.subscribe(
      (user) => {
        if (user) {
          subject.next(true);
        } else {
          subject.next(false);
        }
      }
    );

    return subject.asObservable();
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

}
