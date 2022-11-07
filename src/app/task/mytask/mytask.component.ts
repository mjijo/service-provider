import { Component, OnInit } from '@angular/core';

import { PluginsService } from '../../services/plugins.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {

  constructor(private pluginService: PluginsService) { }

  async ngOnInit() {
    setTimeout(() => {
      this.pluginService.initDataTable('myTasks','My Tasks',0);
    }, 3000);
  }

  showModal(modalId:string){
    this.pluginService.showAlert(modalId);
  }

  closeModal(modalId:string){
    this.pluginService.closeAlert(modalId);
  }

}
