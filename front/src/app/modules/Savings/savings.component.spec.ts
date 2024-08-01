import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsComponent } from './savings.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('SavingsComponent', () => {
  let component: SavingsComponent;
  let fixture: ComponentFixture<SavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingsComponent],
      imports: [
        HeaderatmModule,
        ShowbalanceModule,
        ExitbuttonModule,
        FooterModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
