import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class GameCoreService {

  private _round = 1;

  public set round(round: number) {
    this._round = round;
    this.notifyCurrentRound();
    this.notifyCurrentTurn();
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

  private _turnSubject: ReplaySubject<string>;

  private get turnSubject(): ReplaySubject<string> {
    if (!this._turnSubject) {
      this._turnSubject = new ReplaySubject(1);
    }
    return this._turnSubject;
  }

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.round = 1;
  }

  getGameRound(): ReplaySubject<number> {
    return this.roundSubject;
  }

  getGameTurn(): ReplaySubject<string> {
    return this.turnSubject;
  }

  changeBlockState(i, j) {
    ++this.round;
  }

  private notifyCurrentRound() {
    this.roundSubject.next(this.round);
  }

  private notifyCurrentTurn() {
    this.turnSubject.next(this.round % 2 === 1 ? 'O' : 'X');
  }
}
