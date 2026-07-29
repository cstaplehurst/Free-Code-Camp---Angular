import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'hinv-root',

  templateUrl: './app.component.html',
  //Example of inline template (not recommended for larger components)
  //template: `<h1>hello world</h1>
  //  <p>Welcome to the Hotel Inventory App!</p>
  // `,

  styleUrls: ['./app.component.scss'],
  //Example of inline styles (not recommended for larger components)
  //styles: [` h1 { color: red; }`],
})
export class AppComponent implements OnInit {
  title = 'hotelinventoryapp';

  role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }

  //@ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  // ngAfterViewInit() {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
