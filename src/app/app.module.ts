import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameBlockComponent } from './game-block/game-block.component';
import { GameNotifierComponent } from './game-notifier/game-notifier.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameBlockComponent,
    GameNotifierComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
