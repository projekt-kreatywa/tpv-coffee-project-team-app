import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  items: FirebaseListObservable<any>;
  name: any;
  msgVal: string = '';

  constructor(public af: AngularFire, private router: Router) {

    this.items = af.database.list('/messages', {
      query: {
        limitToLast: 20
      }
    });

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });

  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.name.auth.displayName});
    this.msgVal = '';
}

  ngOnInit() {
  }

}
