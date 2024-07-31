import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeatmbuttonComponent } from './homeatmbutton.component';

describe('HomeatmbuttonComponent', () => {
  let component: HomeatmbuttonComponent;
  let fixture: ComponentFixture<HomeatmbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeatmbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeatmbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
