import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyStaticticsComponent } from './money-statictics.component';

describe('MoneyStaticticsComponent', () => {
  let component: MoneyStaticticsComponent;
  let fixture: ComponentFixture<MoneyStaticticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyStaticticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyStaticticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
