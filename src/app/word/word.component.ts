import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  salvar() {
    
  }

  cancelar() {
    this.router.navigate(['/']);
  }

}
