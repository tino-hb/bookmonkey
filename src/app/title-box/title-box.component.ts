import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'bm-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  ngOnInit() {
  }
    clickTitle() {
        this.titleClicked.emit(`My fancy title is ${this.title}. Awesome isn't it!`)
    }
}
