import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class GameCoreService {

  private _round = 1;

  public set round(round: number) {
    this._round = round;
    this.notifyCurrentRound();
  }

  public get round(): number {
    return this._round;
  }

  private _roundSubject: ReplaySubject<number>;

  private get roundSubject(): ReplaySubject<number> {
    if (!this._roundSubject) {
      this._roundSubject = new ReplaySubject(1);
    }
    return this._roundSubject;
  }

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.round = 0;
  }

  getGameRound() {
    return this.roundSubject;
  }

  changeBlockState(i, j) {
    ++this.round;
  }

  private notifyCurrentRound() {
    this.roundSubject.next(this.round);
  }
}
