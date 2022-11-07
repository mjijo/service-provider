import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productcategories',
  templateUrl: './productcategories.component.html',
  styleUrls: ['./productcategories.component.scss']
})
export class ProductcategoriesComponent implements OnInit {
  public allProductCategories: any = [];
  public isLoading: boolean = false;
  public this_product_cat: any = {
    product_category_id: null,
    product_name: null,
    product_category_code: null,
    user_id: null
  }
  public isUpdate: boolean = false;

  constructor(private apiService: ApiService,
              private dataService: DataService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.this_product_cat.user_id = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getProductCategories();
  }

  validateInputs(){
    // do not proceed if true
    let status = true;
    if(this.isUpdate == false){
      let product_name_err = true;
      let product_code_err = true;
      if(this.this_product_cat.product_name != null && this.this_product_cat.product_name != '' && this.this_product_cat.product_name != ' '){ product_name_err = false; };
      if(this.this_product_cat.product_category_code != null && this.this_product_cat.product_category_code != null && this.this_product_cat.product_category_code != '' && this.this_product_cat.product_category_code != ' '){ product_code_err = false; };

      // also check that the country code or phone code is not a duplicate of an existing one
      this.allProductCategories.forEach((product:any) => {
        if(product.product_name == this.this_product_cat.product_name){ product_name_err = true; }
        if(this.this_product_cat.product_category_id == null && product.product_category_code == this.this_product_cat.product_category_code){ product_code_err = true; }
      });

      status = (product_name_err || product_code_err ? true : false);
      return status;
    }else{
      return status;
    }
  }

  async getProductCategories(){
    this.isLoading = true;
    let endpoint: string = this.apiService.getEndpoints().settings.product_categories.get_all_product_categories;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allProductCategories = response.data;
            this.isLoading = false;
            
          }else{
            console.log('No Product Categs >',response.message);
            this.allProductCategories = [];
            this.isLoading = false;
          }
        }else{
          console.log('product categs err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Product Categs Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  async addProductCategory(){
    this.isLoading = true;
    this.this_product_cat.product_name = this.this_product_cat.product_name.toUpperCase();
    this.this_product_cat.product_category_code = this.this_product_cat.product_category_code.toUpperCase();
    this.this_product_cat.product_category_id = (this.this_product_cat.product_category_id == null ? null : parseInt(this.this_product_cat.product_category_id));

    let endpoint: string = this.apiService.getEndpoints().settings.product_categories.add_product_cat;
    await this.apiService.post(this.this_product_cat, endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allProductCategories = response.data;
            this.isLoading = false;
            this.this_product_cat = {
              product_category_id: null,
              product_name: null,
              product_category_code: null
            };
            
          }else{
            console.log('No Product Cats >',response.message);
            this.allProductCategories = [];
            this.isLoading = false;
          }
        }else{
          console.log('product cats err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Add Product Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  viewProductCategory(product:any){
    this.isUpdate = true;
    this.this_product_cat.product_category_id = product.product_category_id;
    this.this_product_cat.product_name = product.product_name;
    this.this_product_cat.product_category_code = product.product_category_code;
  }

}
