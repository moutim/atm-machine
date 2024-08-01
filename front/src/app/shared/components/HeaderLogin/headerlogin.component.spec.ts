import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderloginComponent } from './headerlogin.component';

describe('HeaderloginComponent', () => {
  let component: HeaderloginComponent;
  let fixture: ComponentFixture<HeaderloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderloginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve conter um header com as classes "limiter" e "header-login"', () => {
    const headerElement = fixture.debugElement.query(By.css('header.limiter.header-login'));
    expect(headerElement).toBeTruthy();
  });

  it('deve conter os ícones e textos corretos', () => {
    const icons = fixture.debugElement.queryAll(By.css('span.material-symbols-outlined'));
    const texts = fixture.debugElement.queryAll(By.css('h2'));

    expect(icons.length).toBe(2);
    expect(texts.length).toBe(2);

    expect(icons[0].nativeElement.textContent).toContain('check_circle');

    expect(icons[1].nativeElement.textContent).toContain('check_circle');
  });

  it('deve conter uma div com a classe "line"', () => {
    const lineElement = fixture.debugElement.query(By.css('div.line'));
    expect(lineElement).toBeTruthy();
  });
});
