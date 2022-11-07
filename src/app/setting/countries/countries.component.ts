import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  public allCountries: any = [];
  public countriesExist: boolean = false;
  public isLoading: boolean = false;
  public this_country: any = {
    country_id: null,
    country_name: null,
    country_code: null,
    phone_code: null,
    user_id: null
  }
  public isUpdate: boolean = false;

  constructor(private apiService: ApiService,
              private dataService: DataService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.this_country.user_id = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getCountries();
  }

  validateInputs(){
    // do not proceed if true
    if(this.isUpdate == false){
      let status = true;
      let country_err = true;
      let code_err = true;
      let phone_err = true;
      if(this.this_country.country_name != null && this.this_country.country_name != '' && this.this_country.country_name.length > 3){ country_err = false; };
      if(this.this_country.phone_code != null && this.this_country.phone_code != '' && this.this_country.phone_code != ' '){ code_err = false; };
      if(this.this_country.country_code != null && this.this_country.country_code != '' && this.this_country.country_code != ' '){ phone_err = false; };

      // also check that the country code or phone code is not a duplicate of an existing one
      this.allCountries.forEach((country:any) => {
        if(country.country_code == this.this_country.country_code){ code_err = true; }
        if(this.this_country.country_id == null && country.phone_code == this.this_country.phone_code){ phone_err = true; }
      });

      status = (country_err || code_err || phone_err ? true : false);
      return status;
    }else{
      let status = false;
      return status;
    }
  }

  async getCountries(){
    this.isLoading = true;
    let endpoint: string = this.apiService.getEndpoints().settings.countries.get_all_countries;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allCountries = response.data;
            this.countriesExist = (this.allCountries.length > 0 ? true : false);
            this.isLoading = false;
            
          }else{
            console.log('No Countries >',response.message);
            this.allCountries = [];
            this.countriesExist = false;
            this.isLoading = false;
          }
        }else{
          console.log('countries err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Countries Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  async addCountry(){
    this.isLoading = true;
    this.this_country.country_name = this.this_country.country_name.toUpperCase();
    this.this_country.country_code = this.this_country.country_code.toUpperCase();
    this.this_country.phone_code = this.this_country.phone_code.toUpperCase();

    let endpoint: string = this.apiService.getEndpoints().settings.countries.add_country;
    await this.apiService.post(this.this_country, endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allCountries = response.data;
            this.countriesExist = (this.allCountries.length > 0 ? true : false);
            this.isLoading = false;
            this.this_country= {
              country_id: null,
              country_name: null,
              country_code: null,
              phone_code: null
            };
            
          }else{
            console.log('No Countries >',response.message);
            this.allCountries = [];
            this.countriesExist = false;
            this.isLoading = false;
          }
        }else{
          console.log('countries err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Add Country Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  viewCountry(country:any){
    this.isUpdate = true;
    this.this_country.country_id = country.country_id;
    this.this_country.country_name = country.country_name;
    this.this_country.country_code = country.country_code;
    this.this_country.phone_code = country.phone_code;
  }

}
