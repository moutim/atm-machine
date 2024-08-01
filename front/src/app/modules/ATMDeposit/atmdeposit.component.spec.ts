import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmdepositComponent } from './atmdeposit.component';

describe('AtmdepositComponent', () => {
  let component: AtmdepositComponent;
  let fixture: ComponentFixture<AtmdepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmdepositComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
