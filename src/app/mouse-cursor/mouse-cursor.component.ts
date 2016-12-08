import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bm-mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.css']
})
export class MouseCursorComponent implements OnInit {

    x: number;
    y: number;

  constructor() {}

    handleMousePosition({clientX, clientY}: MouseEvent) {
      this.x = clientX;
      this.y = clientY;
  }


  ngOnInit() {
  }

}
