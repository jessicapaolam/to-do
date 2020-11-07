import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RegisterRoutingModule,
    FlexLayoutModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule {}
