import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.css']
})
export class GameBlockComponent implements OnInit {

  @Input() i;
  @Input() j;
  constructor() { }

  ngOnInit() {
  }

  flip() {
    console.log(this.i, this.j);
  }

}
