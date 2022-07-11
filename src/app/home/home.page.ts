import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  form: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      rememberMe: [false],
    },
    { updateOn: 'submit' }
  );

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.valid) console.log('OK');
  }
}
