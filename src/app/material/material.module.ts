import { 
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule
  ],
})
export class MaterialModule { }
