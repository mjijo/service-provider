import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';
import { PluginsService } from '../../services/plugins.service';

@Component({
  selector: 'app-add-service-provider',
  templateUrl: './add-service-provider.component.html',
  styleUrls: ['./add-service-provider.component.scss']
})
export class AddServiceProviderComponent implements OnInit {
  public user_mode: any = null;
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
  public allCountries: any = [];
  public allSectors: any = [];
  public allServiceCategories: any = [];
  public allEntities: any = [];
  public reg_certificate_file: File | any;
  public isLoading: boolean = false;
  public spCreationResponse: any = null;

  private taxFile: File | null = null;
  private regFile: File | null = null;

  constructor(private apiService: ApiService,
              private dataService: DataService,
              private pluginService: PluginsService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.new_service_provider.user_id = parseInt(user.user_id); }
    this.user_mode = this.dataService.mode;
  }

  async ngOnInit() {
    await this.getCountries();
    await this.getSectors();
    await this.getServiceCategories();

    if(this.user_mode.sa_mode == true){
      // get all entities (org's and individuals)
      await this.getAllEntities();
    }else{
      // get the entity id from the logged in user
      this.new_service_provider.entity_id = this.dataService.user.entity_id;
    }

    this.new_service_provider.contact_persons.push({full_name: null, email: null, phone: null});
    this.new_service_provider.branches.push({location_name: null, location_email: null, location_phone: null, action: null, address: null});

    // init modal
    this.pluginService.popUp('spModalStatus');
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

  async getAllEntities(){
    let endpoint: string = this.apiService.getEndpoints().settings.entities.get_all_entities;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) { this.allEntities = response.data; }
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
    this.regFile = event.target.files[0];
    if (this.regFile) {
      this.new_service_provider.reg_certificate = this.regFile.name;
      let formData = new FormData();
      formData.append("reg_cert_file", this.regFile);
      console.log('reg cert file >>',this.regFile);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
    }
  }

  setTaxCertificate(event:Event|any){
    this.taxFile = event.target.files[0];
    if (this.taxFile) {
      this.new_service_provider.tax_certificate = this.taxFile.name;
      let formData = new FormData();
      formData.append("tax_cert_file", this.taxFile);
      console.log('tax cert file >>',this.taxFile);
      // const upload$ = this.http.post("/api/thumbnail-upload", formData);
    }
  }

  validateInputs(){
    //
  }

  async createNewServiceProvider(){
    this.isLoading = true;
    this.pluginService.popUpManually('spModalStatus');

    console.log('Payload > ',this.new_service_provider);
    console.log('Certificate File > ',this.reg_certificate_file);

    let endpoint: string = this.apiService.getEndpoints().service_providers.create;
    await this.apiService.post(this.new_service_provider, endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.spCreationResponse = 'Your service provider has been successfully created. You can create a new one or navigate to all service providers to view your list of existing service providers.';
            this.clearForm(this.new_service_provider);
          }
        }else{
          this.spCreationResponse = 'Looks like an error occurred. Please try again. If this persists, contact us.'
          this.isLoading = false;
        }
      },
      error => { 
        this.spCreationResponse = error;
        console.log('Add sp Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  increaseContactPerson(){
    this.new_service_provider.contact_persons.push({full_name: null, email: null, phone: null});
    console.log(this.new_service_provider.contact_persons);
  }

  increaseBranches(){
    this.new_service_provider.branches.push({location_name: null, location_email: null, location_phone: null, action: null, address: null});
    console.log(this.new_service_provider.branches);
  }

  decreaseFromList(index:number,arr:any){
    arr.splice(index, 1); // 2nd parameter means remove one item only
  }

  clearForm(obj:any){
    Object.keys(obj).forEach((key:any) => {
      if(key == "contact_persons"){ obj[key] = [{full_name: null, email: null, phone: null}]; }
      else if(key == "branches"){ obj[key] = [{location_name: null, location_email: null, location_phone: null, action: null, address: null}]; }
      else if(key == "currency"){ obj[key] = 'KES'; }
      else{ obj[key] = null; }
    });
  }

  showModal(modalId:string){
    // this.pluginService.popUp();
  }

  closeModal(modalId:string){
    // this.pluginService.closeAlert(modalId);
  }

}
