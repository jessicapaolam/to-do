import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ListRoutingModule,
    FlexLayoutModule
  ],
  declarations: [ListComponent, ListDetailComponent]
})
export class ListModule {}
