import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'hotelinventoryapp';
}
