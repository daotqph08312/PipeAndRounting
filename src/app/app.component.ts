import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  object =[ {
    name: 'Trần Quang Đạo',
    gender:0
  },
   {
    name: 'Kim Anh',
    gender:1
  },
  ]
}
