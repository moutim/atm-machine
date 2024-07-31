import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitbuttonComponent } from './exitbutton.component';

describe('ExitbuttonComponent', () => {
  let component: ExitbuttonComponent;
  let fixture: ComponentFixture<ExitbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExitbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
