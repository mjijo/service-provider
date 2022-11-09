import { Component, OnInit } from '@angular/core';

import { PluginsService } from '../../services/plugins.service';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-mytask',
  templateUrl: './mytask.component.html',
  styleUrls: ['./mytask.component.scss']
})
export class MytaskComponent implements OnInit {
  private userId: any = null;
  public isLoading: boolean = false;
  public allTasks: any = [];

  constructor(private pluginService: PluginsService,
              private dataService: DataService,
              private apiService: ApiService) 
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.userId = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getTasks();
    setTimeout(() => {
      this.pluginService.initDataTable('myTasks','My Tasks',0);
    }, 3000);
  }

  async getTasks(){
    let endpoint: string = this.apiService.getEndpoints().tasks.get_tasks;
    this.isLoading = true;
    
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allTasks = response.data;
            this.isLoading = false;
            
          }else{
            console.log('No Tasks >',response.message);
            this.allTasks = [];
            this.isLoading = false;
          }
        }else{
          console.log('tasks err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Tasks Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  showModal(modalId:string){
    this.pluginService.showAlert(modalId);
  }

  closeModal(modalId:string){
    this.pluginService.closeAlert(modalId);
  }

}
