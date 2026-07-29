import {
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy
{
  //Interpolation syntax
  hotelName = 'Hilton Hotel';

  //Property Binding syntax
  numberOfRooms = 10;

  //Event Binding syntax
  hideRooms = false;

  selectedRoom!: RoomList;

  roomList: RoomList[] = [];

  //Component Interaction - Single Instance
  //@ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  //Component Interaction - Multiple Instances
  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  rooms: Room | null = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  title = 'Room List';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomsService.getRooms();
  }

  //Something that occurs every time a event occurs
  ngDoCheck(): void {
    console.log('DoCheck is called');
  }

  ngAfterViewInit(): void {
    //this.headerComponent.title = `Welcome to ${this.hotelName}!`;
    this.headerChildrenComponent.forEach((header, index) => {
      if (index === 0) {
        header.title = `Welcome to ${this.hotelName}!`;
      } else {
        header.title = `Enjoy your stay at ${this.hotelName}!`;
      }
    });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms List Toggle';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Presidential Suite',
      amenities: [
        'Air Conditioning',
        'Free Wi-Fi',
        'TV',
        'Mini Bar',
        'Jacuzzi',
        'Private Pool',
      ],
      price: 500,
      photos: 'https://images.unsplash.com/photo-1560347876-aeef00ee58a1',
      checkinTime: new Date('2023-07-01T14:00:00'),
      checkoutTime: new Date('2023-07-02T12:00:00'),
      rating: 9.5,
    };

    //This wont work when the Change Detection is set to onPush
    //this.roomList.push(room);

    //This does
    this.roomList = [...this.roomList, room];
  }

  ngOnDestroy(): void {
    console.log('OnDestroy is called');
  }
}
