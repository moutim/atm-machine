import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCpfFormat]'
})
export class CpfDirective {
  private readonly maxLength = 14;

  constructor(private ngControl: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    const formattedValue = this.formatCpf(this.cutToMaxLength(value));
    this.ngControl?.control?.setValue(formattedValue, { emitEvent: false });
  }

  private cutToMaxLength(value: string): string {
    return value.length > this.maxLength ? value.substring(0, this.maxLength) : value;
  }

  private formatCpf(value: string): string {
    const digitsOnly = value.replace(/\D/g, '').substring(0, 11);
    return this.applyCpfMask(digitsOnly);
  }

  private applyCpfMask(value: string): string {
    if (value.length <= 3) return value;
    if (value.length <= 6) return `${value.substring(0, 3)}.${value.substring(3)}`;
    if (value.length <= 9) return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6)}`;
    return `${value.substring(0, 3)}.${value.substring(3, 6)}.${value.substring(6, 9)}-${value.substring(9)}`;
  }
}
