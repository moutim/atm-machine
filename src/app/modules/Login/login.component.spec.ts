import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com os controles necessários', () => {
    expect(component.forms.contains('CPF')).toBeTrue();
    expect(component.forms.contains('password')).toBeTrue();
  });

  it('o campo CPF deve ser obrigatório e ter comprimento mínimo e máximo', () => {
    const cpfControl = component.forms.get('CPF');

    cpfControl?.setValue('12345678901'); // Testa comprimento insuficiente
    expect(cpfControl?.valid).toBeFalse();

    cpfControl?.setValue('123456789012345'); // Testa comprimento excedente
    expect(cpfControl?.valid).toBeFalse();

    cpfControl?.setValue('123.456.789-01'); // Testa comprimento correto
    expect(cpfControl?.valid).toBeTrue();
  });

  it('o campo senha deve ser obrigatório e ter comprimento mínimo', () => {
    const passwordControl = component.forms.get('password');

    passwordControl?.setValue('123'); // Testa comprimento mínimo
    expect(passwordControl?.valid).toBeFalse();

    passwordControl?.setValue('12345');
    expect(passwordControl?.valid).toBeTrue();
  });

  it('deve chamar onSubmit quando o formulário for válido', () => {
    spyOn(component, 'onSubmit');

    component.forms.setValue({
      CPF: '123.456.789-01',
      password: '12345'
    });

    fixture.debugElement.query(By.css('form')).triggerEventHandler('ngSubmit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('deve desabilitar o botão de envio se o formulário for inválido', () => {
    const button = fixture.debugElement.query(By.css('button[type="submit"]')).nativeElement;

    expect(button.disabled).toBeTrue();

    component.forms.setValue({
      CPF: '123.456.789-01',
      password: '12345'
    });

    fixture.detectChanges();

    expect(button.disabled).toBeFalse();
  });
});
