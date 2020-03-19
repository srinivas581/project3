import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwtrComponent } from './twtr.component';

describe('TwtrComponent', () => {
  let component: TwtrComponent;
  let fixture: ComponentFixture<TwtrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwtrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwtrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
