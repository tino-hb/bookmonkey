import { Component } from '@angular/core';

@Component({
  selector: 'bm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bookmonkey';
  myTitleForBox = 'second title';

  handleTitleClick(e:string) {
    this.title = e;
    console.log(e);
  }
}
