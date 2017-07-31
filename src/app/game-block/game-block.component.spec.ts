import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBlockComponent } from './game-block.component';

describe('GameBlockComponent', () => {
  let component: GameBlockComponent;
  let fixture: ComponentFixture<GameBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
