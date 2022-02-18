import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesContainerComponent } from './games-container.component';

describe('CardsComponent', () => {
  let component: GamesContainerComponent;
  let fixture: ComponentFixture<GamesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
