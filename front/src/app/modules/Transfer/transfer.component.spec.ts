import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferComponent } from './transfer.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('TransferComponent', () => {
  let component: TransferComponent;
  let fixture: ComponentFixture<TransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransferComponent],
      imports: [
        HeaderatmModule,
        ShowbalanceModule,
        ExitbuttonModule,
        FooterModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
