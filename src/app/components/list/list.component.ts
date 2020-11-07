import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ModalController } from '@ionic/angular';

import { ListService } from './../../services/list.service';
import { ListDetailComponent } from './list-detail/list-detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  list = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private listService: ListService,
    public modalController: ModalController
  ) {
    this.listService.getAll().subscribe(
      data => {
        this.list = data;
      }
    )
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      if (this.list.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  async listDetail(id) {
    const modal = await this.modalController.create({
      component: ListDetailComponent,
      componentProps: {
        "id": id
      }
    });

    return await modal.present();
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
