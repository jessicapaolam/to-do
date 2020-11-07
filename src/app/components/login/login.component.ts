import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.compose([Validators.required])],
    });
  }

  login() {
    this.storage.get('username').then(async (val) => {
      if (val === this.loginForm.get('username').value) {
        this.router.navigate(['']);
      } else {
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '',
          message: 'This user is not registered.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    });
  }

}
