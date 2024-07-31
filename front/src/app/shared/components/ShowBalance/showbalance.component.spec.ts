import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbalanceComponent } from './showbalance.component';

describe('ShowbalanceComponent', () => {
  let component: ShowbalanceComponent;
  let fixture: ComponentFixture<ShowbalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowbalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
