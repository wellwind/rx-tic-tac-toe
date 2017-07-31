import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.css']
})
export class GameBlockComponent implements OnInit {

  @Input() i;
  @Input() j;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    Observable.fromEvent(this.elementRef.nativeElement, 'click').subscribe(() => this.flip());
  }

  flip() {
    console.log(this.i, this.j);
  }

}
