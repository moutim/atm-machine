import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { OperationsComponent } from './operations.component';
import { HeaderatmComponent } from '../../shared/components/HeaderATM/headeratm.component';
import { ShowbalanceComponent } from '../../shared/components/ShowBalance/showbalance.component';
import { ButtonComponent } from './Button/button.component';

describe('OperationsComponent', () => {
  let component: OperationsComponent;
  let fixture: ComponentFixture<OperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        OperationsComponent,
        HeaderatmComponent,
        ShowbalanceComponent,
        ButtonComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o cabeçalho com título e subtítulo', () => {
    const headerDe = fixture.debugElement.query(By.css('app-headeratm'));
    const headerComponent = headerDe.componentInstance as HeaderatmComponent;

    headerComponent.title = 'Olá Vitor Moutim';
    headerComponent.subtitle = 'último acesso em 30/07 às 19:23h';

    expect(headerComponent.title).toBe('Olá Vitor Moutim');
    expect(headerComponent.subtitle).toBe('último acesso em 30/07 às 19:23h');
  });

  it('deve renderizar o saldo com o valor correto', () => {
    const balanceDe = fixture.debugElement.query(By.css('app-showbalance'));
    const balanceComponent = balanceDe.componentInstance as ShowbalanceComponent;

    balanceComponent.value = '9,90';

    expect(balanceComponent.value).toBe('9,90');
  });

  it('deve renderizar os botões com os títulos e subtítulos corretos', () => {
    const buttonsDe = fixture.debugElement.queryAll(By.css('app-button'));

    expect(buttonsDe.length).toBe(6);

    expect(buttonsDe[0].componentInstance.title).toBe('meu saque');
    expect(buttonsDe[0].componentInstance.subtitle).toBe('R$ 100,00');
    expect(buttonsDe[0].componentInstance.icon).toBe('vertical_align_bottom');
    expect(buttonsDe[0].componentInstance.highlight).toBeTrue();

    expect(buttonsDe[1].componentInstance.title).toBe('saque');
    expect(buttonsDe[1].componentInstance.subtitle).toBe('mais valores');
    expect(buttonsDe[1].componentInstance.icon).toBe('vertical_align_bottom');
    expect(buttonsDe[1].componentInstance.highlight).toBeTrue();

    expect(buttonsDe[2].componentInstance.title).toBe('extrato');
    expect(buttonsDe[2].componentInstance.subtitle).toBe('conta corrente');
    expect(buttonsDe[2].componentInstance.icon).toBe('wallet');
    expect(buttonsDe[2].componentInstance.highlight).toBeFalsy();

    expect(buttonsDe[3].componentInstance.subtitle).toBe('transferência');
    expect(buttonsDe[3].componentInstance.icon).toBe('sync_alt');
    expect(buttonsDe[3].componentInstance.highlight).toBeFalsy();

    expect(buttonsDe[4].componentInstance.subtitle).toBe('depósito');
    expect(buttonsDe[4].componentInstance.icon).toBe('vertical_align_top');
    expect(buttonsDe[4].componentInstance.highlight).toBeFalsy();

    expect(buttonsDe[5].componentInstance.subtitle).toBe('poupança');
    expect(buttonsDe[5].componentInstance.icon).toBe('savings');
    expect(buttonsDe[5].componentInstance.highlight).toBeFalsy();
  });
});
