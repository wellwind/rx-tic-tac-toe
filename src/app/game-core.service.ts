import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class GameCoreService {

  private round = 1;
  private roundSubject: ReplaySubject<number>;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.round = 1;
    if (!this.roundSubject) {
      this.roundSubject = new ReplaySubject(1);
    }
    this.notifyCurrentRound();
  }

  getGameRound() {
    return this.roundSubject;
  }

  changeBlockState(i, j) {
    ++this.round;
    this.notifyCurrentRound();
  }

  private notifyCurrentRound() {
    this.roundSubject.next(this.round);
  }
}
