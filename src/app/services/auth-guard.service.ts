import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {

  }

  canActivate() {
    let subject = new Subject<boolean>();

    this.authService.isLoggedIn().subscribe(
      (user) => {
        if (user) {
          subject.next(true);
        } else {
          this.router.navigate(['/login']);
          subject.next(false);
        }
      }
    );
    
    return subject.asObservable();
  }

}