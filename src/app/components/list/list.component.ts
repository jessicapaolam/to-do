import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { ListService } from './../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  list = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public listService: ListService
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

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
