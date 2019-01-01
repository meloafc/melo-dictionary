import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) {
    this.user = firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log(this.userDetails.email);
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
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
