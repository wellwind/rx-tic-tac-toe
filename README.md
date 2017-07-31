# 井字遊戲 - Angular/RxJs Version

利用井字遊戲來示範RxJs

# 使用API清單

- [Observerable.fromEvent](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-fromEvent)：
  - game-block.component.ts：使用`Observerable.fromEvent()`來監聽component的click事件。

- [ReplaySubject](http://reactivex.io/rxjs/class/es6/ReplaySubject.js~ReplaySubject.html)：
  - game-core.service.ts(roundSubjec)：用來確保訂閱時可以取得目前回合數，使用`new ReplaySubject(1)`來記錄最近一次的回合。
