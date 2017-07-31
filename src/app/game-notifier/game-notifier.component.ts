import { Observable } from 'rxjs/Observable';
import { GameCoreService } from './../game-core.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-notifier',
  templateUrl: './game-notifier.component.html',
  styleUrls: ['./game-notifier.component.css']
})
export class GameNotifierComponent implements OnInit {

  round$: Observable<number>;

  constructor(private gameCoreService: GameCoreService) { }

  ngOnInit() {
    this.round$ = this.gameCoreService.getGameRound();
  }

}
