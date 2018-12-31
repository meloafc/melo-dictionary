import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.items = this.firestore.collection('/users').doc("afabiano15@gmail.com").collection("words").valueChanges();
  }

  navegarParaCadastrarPalavra() {
    this.router.navigate(['/word']);
  }

}
