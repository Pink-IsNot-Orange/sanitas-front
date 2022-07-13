import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { IonicModule, IonInput } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be defined', () => {
    expect(component.form).toBeDefined();
  });

  it('should init form correctly', () => {
    const form = {
      email: '',
      password: '',
      rememberMe: false,
    };
    expect(component.form.value).toEqual(form);
  });

  it('email input should be invalid when no email is specify', () => {
    component.form.setValue({
      email: '',
      password: '',
      rememberMe: true,
    });
    const emailControl = component.form.get('email');
    expect(emailControl.hasError('required')).toBeTrue();
  });

  it('email input should be invalid when bad email input', () => {
    component.form.setValue({
      email: 'jonatan.puche',
      password: '',
      rememberMe: true,
    });
    const emailControl = component.form.get('email');
    expect(emailControl.hasError('email')).toBeTrue();
  });

  it('email input should be valid when good email input', () => {
    component.form.setValue({
      email: 'jonatan.puche@soprasteria.com',
      password: '',
      rememberMe: true,
    });
    const emailControl = component.form.get('email');
    expect(emailControl.hasError('email')).toBeFalse();
  });

  it('password input should be invalid when no password is specify', () => {
    component.form.setValue({
      email: '',
      password: '',
      rememberMe: true,
    });
    const passwordControl = component.form.get('password');
    expect(passwordControl.hasError('required')).toBeTrue();
  });

  it('password input should be invalid when password is less than 5 characters', () => {
    component.form.setValue({
      email: '',
      password: '1234',
      rememberMe: true,
    });
    const passwordControl = component.form.get('password');
    expect(passwordControl.hasError('minlength')).toBeTrue();
  });

  it('password input should be valid when password is 5 or more characters', () => {
    component.form.setValue({
      email: '',
      password: '12345',
      rememberMe: true,
    });
    const passwordControl = component.form.get('password');
    expect(passwordControl.hasError('minlength')).toBeFalse();
  });

  it('form should be valid when all inputs are valid', () => {
    component.form.setValue({
      email: 'jonatan.puche@soprasteria.com',
      password: '12345',
      rememberMe: true,
    });
    expect(component.form.valid).toBeTrue();
  });
});
