import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbookComponent } from './fbook.component';

describe('FbookComponent', () => {
  let component: FbookComponent;
  let fixture: ComponentFixture<FbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
