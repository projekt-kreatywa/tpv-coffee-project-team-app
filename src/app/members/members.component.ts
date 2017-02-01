import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
  //   animations: [moveIn(), fallIn(), moveInLeft()],
  //   host: { '[@moveIn]': '' }
  // 

})
export class MembersComponent implements OnInit {

  name: any;
  state: string = '';
  items: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire, private router: Router) {

    this.af.auth.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
    this.items = af.database.list('/items');

  }

  logout() {
    this.af.auth.logout();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }

}
