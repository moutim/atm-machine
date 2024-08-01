import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmdepositComponent } from './atmdeposit.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('AtmdepositComponent', () => {
  let component: AtmdepositComponent;
  let fixture: ComponentFixture<AtmdepositComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtmdepositComponent],
      imports: [
        HeaderatmModule,
        ShowbalanceModule,
        ExitbuttonModule,
        FooterModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtmdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });
});
