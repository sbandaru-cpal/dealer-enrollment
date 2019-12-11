import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  data: string;
  userId:string;
  firstName:string;
  lastName:string
constructor(private router: Router) {
  const navigation = this.router.getCurrentNavigation();
  const state = navigation.extras.state as {
    data: string,
    userId:string,
    firstName:string,
    lastName:string
  };
  this.data = state.data;
  this.firstName = state.firstName;
  this.lastName = state.lastName;
  this.userId = state.userId;
}

  ngOnInit() {
  }

}
