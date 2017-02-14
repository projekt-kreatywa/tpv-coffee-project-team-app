import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/contacts');

  }

  ngOnInit() {
  }

}
