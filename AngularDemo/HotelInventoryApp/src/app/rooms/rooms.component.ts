import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  //Interpolation syntax
  hotelName = 'Hilton Hotel';

  //Property Binding syntax
  numberOfRooms = 10;

  //Event Binding syntax
  hideRooms = false;

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
