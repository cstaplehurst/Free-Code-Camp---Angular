import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  rooms: Room | null = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Standard Room',
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'TV'],
      price: 100,
      photos: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
      checkinTime: new Date('2023-07-01T14:00:00'),
      checkoutTime: new Date('2023-07-02T12:00:00'),
      rating: 4.5,
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: ['Air Conditioning', 'Free Wi-Fi', 'TV', 'Mini Bar'],
      price: 150,
      photos: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
      checkinTime: new Date('2023-07-01T14:00:00'),
      checkoutTime: new Date('2023-07-02T12:00:00'),
      rating: 6.1398,
    },
    {
      roomNumber: 3,
      roomType: 'Suite',
      amenities: [
        'Air Conditioning',
        'Free Wi-Fi',
        'TV',
        'Mini Bar',
        'Jacuzzi',
      ],
      price: 250,
      photos: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
      checkinTime: new Date('2023-07-01T14:00:00'),
      checkoutTime: new Date('2023-07-02T12:00:00'),
      rating: 8.09123,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
