import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-servicecategory',
  templateUrl: './servicecategory.component.html',
  styleUrls: ['./servicecategory.component.scss']
})
export class ServicecategoryComponent implements OnInit {
  public allServiceCategories: any = [];
  public isLoading: boolean = false;
  public this_category: any = {
    category_id: null,
    category_name: null,
    category_slug: null,
    parent_category_id: null,
    category_desc: null,
    user_id: null
  }
  public isUpdate: boolean = false;

  constructor(private apiService: ApiService,
              private dataService: DataService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.this_category.user_id = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getServiceCategories();
  }

  validateInputs(){
    // do not proceed if true
    if(this.isUpdate){
      //
    }else{
      //
    }
  }

  async getServiceCategories(){
    this.isLoading = true;
    let endpoint: string = this.apiService.getEndpoints().settings.service_categories.get_all_categories;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allServiceCategories = response.data;
            this.isLoading = false;
            
          }else{
            console.log('No Service Categs >',response.message);
            this.allServiceCategories = [];
            this.isLoading = false;
          }
        }else{
          console.log('service categs err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Service Categs Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  async addServiceCategory(){
    //
  }

  viewServiceCategory(category:any){
    //
  }

}
