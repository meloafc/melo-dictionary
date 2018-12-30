import { 
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatInputModule
  ],
})
export class MaterialModule { }
