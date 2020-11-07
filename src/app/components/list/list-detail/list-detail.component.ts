import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ListService } from './../../../services/list.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.scss'],
})
export class ListDetailComponent implements OnInit {
  @Input() id: number;
  listDetail = [];

  constructor(
    private modal: ModalController,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.listService.getById(this.id).subscribe(
      data => {
        this.listDetail = Array.of(data);
      }
    );
  }

  async closeModal() {
    await this.modal.dismiss();
  }

}
