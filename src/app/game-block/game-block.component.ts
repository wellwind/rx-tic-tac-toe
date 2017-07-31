import { GameCoreService } from './../game-core.service';
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
  constructor(private elementRef: ElementRef, private gameCoreService: GameCoreService) { }

  ngOnInit() {
    Observable.fromEvent(this.elementRef.nativeElement, 'click').subscribe(() => this.flip());
  }

  flip() {
    this.gameCoreService.changeBlockState(this.i, this.j);
  }

}
