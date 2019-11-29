import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  clickCounter: number = 0;
  name: string = '';  // add this

  constructor() { }

  ngOnInit() {
  }

  countClick() {
    this.clickCounter += 1;
  }



}
