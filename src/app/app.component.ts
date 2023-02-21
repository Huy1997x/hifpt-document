import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-app';
  n = 3;
  src = './../assets/file/test_1.pdf';
  listMenu = [
    {
      name: 'API shoping', 
      href: 'item-3-1',
      file: '',
    },
    {
      name: 'API billing',
      href: 'item-3-2',
      file: '',
    },
    {
      name: 'API Seller',
      href: 'item-3-3',
      file: '',
    },
  ];
  ngOnInit(): void {
    this.listMenu.forEach((element, index) => {
      element.file = `./../assets/file/test_${index + 1}.pdf`;
    });
    console.log(this.listMenu);
  }
}
