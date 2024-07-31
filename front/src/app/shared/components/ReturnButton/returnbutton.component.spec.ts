import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbuttonComponent } from './returnbutton.component';

describe('ReturnbuttonComponent', () => {
  let component: ReturnbuttonComponent;
  let fixture: ComponentFixture<ReturnbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
