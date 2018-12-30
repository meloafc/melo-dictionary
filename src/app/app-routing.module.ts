import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordComponent } from './word/word.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'word', component: WordComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
