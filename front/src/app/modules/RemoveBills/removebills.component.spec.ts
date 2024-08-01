import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovebillsComponent } from './removebills.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';

describe('RemovebillsComponent', () => {
  let component: RemovebillsComponent;
  let fixture: ComponentFixture<RemovebillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemovebillsComponent],
      imports: [
        HeaderatmModule,
        ExitbuttonModule,
        FooterModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemovebillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
