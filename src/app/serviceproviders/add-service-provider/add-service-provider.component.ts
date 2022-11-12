import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-service-provider',
  templateUrl: './add-service-provider.component.html',
  styleUrls: ['./add-service-provider.component.scss']
})
export class AddServiceProviderComponent implements OnInit {
  public new_service_provider: any = {
    full_name: null,
    logo: null,
    desc: null,
    phone: null,
    email: null,
    country_id: null,
    currency: 'KES',
    contact_no: null,
    contact_email: null,
    sector_id: null,
    service_category_id: null,
    reg_number: null,
    reg_certificate: null,
    tax_number: null,
    tax_certificate: null,
    entity_id: null,
    user_id: null,
    contact_persons: [],
    branches: []
  }
  public person:any = {full_name: null, email: null, phone: null};
  public branch:any = {location_name: null, location_email: null, location_phone: null, action: null, address: null};
  public allCountries: any = [];
  public allSectors: any = [];
  public allServiceCategories: any = [];
  public reg_certificate_file: File | any;

  constructor(private apiService: ApiService,
              private dataService: DataService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.new_service_provider.user_id = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getCountries();
    await this.getSectors();
    await this.getServiceCategories();

    this.new_service_provider.contact_persons.push(this.person);
    this.new_service_provider.branches.push(this.branch);
  }

  async getCountries(){
    let endpoint: string = this.apiService.getEndpoints().settings.countries.get_all_countries;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) { this.allCountries = response.data; }
        }
      },
      error => { console.log('Countries Err Response >', error); }
    );
  }

  async getSectors(){
    let endpoint: string = this.apiService.getEndpoints().settings.sectors.get_all_sectors;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) { this.allSectors = response.data; }
        }
      },
      error => { console.log('Sectors Err Response >', error); }
    );
  }

  async getServiceCategories(){
    let endpoint: string = this.apiService.getEndpoints().settings.service_categories.get_all_categories;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) { this.allServiceCategories = response.data; }
        }
      },
      error => { console.log('Service Categs Err Response >', error); }
    );
  }

  setLogo(event:Event|any){
    let file:File = event.target.files[0];
    if (file) {
      this.new_service_provider.logo = file.name;
      let formData = new FormData();
      formData.append("logo_file", file);
      console.log('logo file >>',file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
    }
  }

  setRegCertificate(event:Event|any){
    let file:File = event.target.files[0];
    if (file) {
      this.new_service_provider.reg_certificate = file.name;
      let formData = new FormData();
      formData.append("reg_cert_file", file);
      console.log('reg cert file >>',file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
    }
  }

  setTaxCertificate(event:Event|any){
    let file:File = event.target.files[0];
    if (file) {
      this.new_service_provider.tax_certificate = file.name;
      let formData = new FormData();
      formData.append("tax_cert_file", file);
      console.log('tax cert file >>',file);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
    }
  }

  validateInputs(){
    //
  }

  createNewServiceProvider(){
    console.log('Payload > ',this.new_service_provider);
    console.log('Certificate File > ',this.reg_certificate_file);
  }

  increaseContactPerson(){
    this.new_service_provider.contact_persons.push(this.person);
    console.log(this.new_service_provider.contact_persons);
  }

  increaseBranches(){
    this.new_service_provider.branches.push(this.branch);
    console.log(this.new_service_provider.branches);
  }

  decreaseFromList(index:number,arr:any){
    arr.splice(index, 1); // 2nd parameter means remove one item only
  }

}
