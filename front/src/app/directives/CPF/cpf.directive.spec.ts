import { CpfDirective } from './cpf.directive';
import { NgControl } from '@angular/forms';

describe('CpfDirective', () => {
  let directive: CpfDirective;
  let mockNgControl: { control: { setValue: jasmine.Spy } };

  beforeEach(() => {
    mockNgControl = {
      control: { setValue: jasmine.createSpy('setValue') }
    };

    directive = new CpfDirective(mockNgControl as unknown as NgControl);
  });

  it('deve criar uma instância', () => {
    expect(directive).toBeTruthy();
  });

  it('deve formatar o CPF corretamente', () => {
    // Testa CPF sem formatação
    directive.onInput('12345678901');
    expect(mockNgControl.control.setValue).toHaveBeenCalledWith('123.456.789-01', { emitEvent: false });

    // Testa CPF com formatação
    directive.onInput('123456789');
    expect(mockNgControl.control.setValue).toHaveBeenCalledWith('123.456.789', { emitEvent: false });

    // Testa CPF com comprimento excedendo 11 dígitos
    directive.onInput('12345678901234');
    expect(mockNgControl.control.setValue).toHaveBeenCalledWith('123.456.789-01', { emitEvent: false });
  });

  it('deve lidar com a entrada contendo caracteres não numéricos', () => {
    directive.onInput('123-456-789.01');
    expect(mockNgControl.control.setValue).toHaveBeenCalledWith('123.456.789-01', { emitEvent: false });
  });
});
