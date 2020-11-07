import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
    });
  }

  register() {
    this.storage.set('username', this.registerForm.get('username').value);
    this.router.navigate(['login']);
  }

  login() {
    this.router.navigate(['login']);
  }

}
