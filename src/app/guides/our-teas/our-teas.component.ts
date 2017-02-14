import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-our-teas',
  templateUrl: './our-teas.component.html',
  styleUrls: ['./our-teas.component.scss']
})
export class OurTeasComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/teas');

  }

  ngOnInit() {
  }

}
