import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovenotesComponent } from './removebills.component';

describe('RemovenotesComponent', () => {
  let component: RemovenotesComponent;
  let fixture: ComponentFixture<RemovenotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemovenotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
