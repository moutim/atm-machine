import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderatmComponent } from './headeratm.component';

describe('HeaderatmComponent', () => {
  let component: HeaderatmComponent;
  let fixture: ComponentFixture<HeaderatmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderatmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
