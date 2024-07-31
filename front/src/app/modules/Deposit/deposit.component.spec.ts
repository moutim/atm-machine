import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { DepositComponent } from './deposit.component';

describe('DepositComponent', () => {
  let component: DepositComponent;
  let fixture: ComponentFixture<DepositComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    // Cria um mock para o Router
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [DepositComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: mockRouter } // Injeta o mock do Router
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com valores vazios', () => {
    expect(component.forms.value).toEqual({ CPF: '', value: '' });
  });

  it('deve ter um formulário válido quando o CPF e o valor são fornecidos corretamente', () => {
    component.forms.setValue({ CPF: '123.456.789-00', value: 1000 });
    expect(component.forms.valid).toBeTrue();
  });

  it('deve mostrar uma mensagem de erro se o CPF for inválido', () => {
    component.forms.get('CPF')?.setValue('123');
    component.forms.get('CPF')?.markAsTouched();
    fixture.detectChanges();
    const errorMsg = fixture.nativeElement.querySelector('.span-error');
    expect(errorMsg).toBeTruthy();
  });

  it('deve definir o cpfExists como true ao submeter um formulário válido', () => {
    component.forms.setValue({ CPF: '123.456.789-00', value: 1000 });
    component.onSubmit();
    expect(component.cpfExists).toBeTrue();
  });

  it('deve definir depositMade como true ao confirmar depósito', () => {
    component.forms.setValue({ CPF: '123.456.789-00', value: 1000 });
    component.onSubmit();
    expect(component.cpfExists).toBeTrue();
    component.confirmDeposit();
    expect(component.depositMade).toBeTrue();
  });

  it('não deve definir cpfExists como true ao submeter um formulário inválido', () => {
    component.forms.setValue({ CPF: '123', value: 1000 });
    component.onSubmit();
    expect(component.cpfExists).toBeFalse();
  });

  it('deve navegar para o login ao chamar navigateToLogin', () => {
    component.navigateToLogin();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home/login']);
  });
});
