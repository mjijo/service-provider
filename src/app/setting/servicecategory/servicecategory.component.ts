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
    let status = true;
    if(this.isUpdate == false){
      let cat_name_err = true;
      let cat_slug_err = true;
      if(this.this_category.category_name != null && this.this_category.category_name != '' && this.this_category.category_name != ' '){ cat_name_err = false; };
      if(this.this_category.category_slug != null && this.this_category.category_slug != '' && this.this_category.category_slug != ' '){ cat_slug_err = false; };

      // also check that the country code or phone code is not a duplicate of an existing one
      this.allServiceCategories.forEach((category:any) => {
        if(category.category_name == this.this_category.category_name){ cat_name_err = true; }
        if(this.this_category.category_id == null && category.category_slug == this.this_category.category_slug){ cat_slug_err = true; }
      });

      status = (cat_name_err || cat_slug_err ? true : false);
      return status;
    }else{
      return status;
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
    this.isLoading = true;
    this.this_category.category_name = this.this_category.category_name.toUpperCase();
    this.this_category.category_slug = this.this_category.category_slug.toUpperCase();
    this.this_category.parent_category_id = (this.this_category.parent_category_id == null ? null : parseInt(this.this_category.parent_category_id));

    let endpoint: string = this.apiService.getEndpoints().settings.service_categories.add_category;
    await this.apiService.post(this.this_category, endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allServiceCategories = response.data;
            this.isLoading = false;
            this.this_category= {
              category_id: null,
              category_name: null,
              category_slug: null,
              parent_category_id: null,
              category_desc: null
            };
            
          }else{
            console.log('No Service Cats >',response.message);
            this.allServiceCategories = [];
            this.isLoading = false;
          }
        }else{
          console.log('service cats err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Add Cats Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  viewServiceCategory(category:any){
    this.isUpdate = true;
    this.this_category.category_id = category.service_category_id;
    this.this_category.category_name = category.service_category_name;
    this.this_category.category_slug = category.service_category_slug;
    this.this_category.parent_category_id = category.parent_category;
    this.this_category.category_desc = category.service_category_desc;
  }

}
