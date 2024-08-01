import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementComponent } from './statement.component';
import { HeaderatmModule } from '../../shared/components/HeaderATM/headeratm.module';
import { ShowbalanceModule } from '../../shared/components/ShowBalance/showbalance.module';
import { ExitbuttonModule } from '../../shared/components/ExitButton/exitbutton.module';
import { FooterModule } from '../../shared/components/Footer/footer.module';
import { ReactiveFormsModule } from '@angular/forms';

describe('StatementComponent', () => {
  let component: StatementComponent;
  let fixture: ComponentFixture<StatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatementComponent],
      imports: [
        HeaderatmModule,
        ShowbalanceModule,
        ExitbuttonModule,
        FooterModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
