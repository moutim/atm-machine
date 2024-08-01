import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve inicializar o formulário com valores padrão', () => {
    expect(component.forms).toBeTruthy();
    expect(component.forms.get('firstName')).toBeTruthy();
    expect(component.forms.get('lastName')).toBeTruthy();
    expect(component.forms.get('CPF')).toBeTruthy();
    expect(component.forms.get('password')).toBeTruthy();
    expect(component.forms.get('passwordConfirm')).toBeTruthy();
  });

  it('deve validar os campos do formulário', () => {
    const firstName = component.forms.get('firstName');
    const lastName = component.forms.get('lastName');
    const cpf = component.forms.get('CPF');
    const password = component.forms.get('password');
    const passwordConfirm = component.forms.get('passwordConfirm');

    firstName?.setValue('');
    lastName?.setValue('');
    cpf?.setValue('');
    password?.setValue('');
    passwordConfirm?.setValue('');

    expect(component.forms.valid).toBeFalse();

    firstName?.setValue('John');
    lastName?.setValue('Doe');
    cpf?.setValue('123.456.789-01');
    password?.setValue('password');
    passwordConfirm?.setValue('password');

    expect(component.forms.valid).toBeTrue();
  });

  it('deve exibir uma mensagem de erro para senhas que não coincidem', () => {
    const password = component.forms.get('password');
    const passwordConfirm = component.forms.get('passwordConfirm');

    password?.setValue('password');
    passwordConfirm?.setValue('differentpassword');
    passwordConfirm?.markAsTouched();

    fixture.detectChanges();

    const errorMessage = fixture.nativeElement.querySelector('.span-error');
    expect(errorMessage.textContent).toContain('As senhas não conferem');
  });

  it('não deve submeter o formulário quando inválido', () => {
    spyOn(component, 'onSubmit').and.callThrough();
    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    submitButton.click();

    expect(component.onSubmit).not.toHaveBeenCalled();
  });
});
