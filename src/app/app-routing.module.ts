import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'word', canActivate: [AuthGuardService], component: WordComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
