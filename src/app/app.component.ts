import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularForms';
  registerForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  firstName;
  lastName;
  email;
  password;
  onSubmit(){
    this.firstName = this.registerForm.get('firstName').value;
    this.lastName = this.registerForm.get('lastName').value;
    this.email = this.registerForm.get('email').value;
    this.password = this.registerForm.get('password').value;
  }
}
