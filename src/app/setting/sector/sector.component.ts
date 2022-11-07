import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {
  public allIndustrySectors: any = [];
  public isLoading: boolean = false;
  public this_sector: any = {
    industry_sector_id: null,
    sector_name: null,
    sector_slug: null,
    sector_desc: null,
    user_id: null
  }
  public isUpdate: boolean = false;

  constructor(private apiService: ApiService,
              private dataService: DataService)
  {
    let user = this.dataService.user;
    if(user && 'user_id' in user){ this.this_sector.user_id = parseInt(user.user_id); }
  }

  async ngOnInit() {
    await this.getIndustrySectors();
  }

  validateInputs(){
    // do not proceed if true
    let status = true;
    if(this.isUpdate == false){
      let sector_name_err = true;
      let sector_slug_err = true;
      if(this.this_sector.sector_name != null && this.this_sector.sector_name != '' && this.this_sector.sector_name != ' '){ sector_name_err = false; };
      if(this.this_sector.sector_slug != null && this.this_sector.sector_slug != null && this.this_sector.sector_slug != '' && this.this_sector.sector_slug != ' '){ sector_slug_err = false; };

      // also check that the country code or phone code is not a duplicate of an existing one
      this.allIndustrySectors.forEach((sector:any) => {
        if(sector.sector_name == this.this_sector.sector_name){ sector_name_err = true; }
        if(this.this_sector.industry_sector_id == null && sector.sector_slug == this.this_sector.sector_slug){ sector_slug_err = true; }
      });

      status = (sector_name_err || sector_slug_err ? true : false);
      return status;
    }else{
      status = false;
      return status;
    }
  }

  async getIndustrySectors(){
    this.isLoading = true;
    let endpoint: string = this.apiService.getEndpoints().settings.sectors.get_all_sectors;
    await this.apiService.get(endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allIndustrySectors = response.data;
            this.isLoading = false;
            
          }else{
            console.log('No Sectors >',response.message);
            this.allIndustrySectors = [];
            this.isLoading = false;
          }
        }else{
          console.log('sectors err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Sectors Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  async addIndustrySector(){
    this.isLoading = true;
    this.this_sector.sector_name = this.this_sector.sector_name.toUpperCase();
    this.this_sector.sector_slug = this.this_sector.sector_slug.toLowerCase();
    this.this_sector.industry_sector_id = (this.this_sector.industry_sector_id == null ? null : parseInt(this.this_sector.industry_sector_id));

    let endpoint: string = this.apiService.getEndpoints().settings.sectors.add_sector;
    await this.apiService.post(this.this_sector, endpoint).subscribe(
      (response:any) => {
        if(response){
          if ('data' in response) {
            this.allIndustrySectors = response.data;
            this.isLoading = false;
            this.this_sector = {
              industry_sector_id: null,
              sector_name: null,
              sector_slug: null,
              sector_desc: null
            };
            
          }else{
            console.log('No Sectors >',response.message);
            this.allIndustrySectors = [];
            this.isLoading = false;
          }
        }else{
          console.log('sectors err');
            this.isLoading = false;
        }
      },
      error => { 
        console.log('Add Sector Err Response >', error);
        this.isLoading = false;
      }
    );
  }

  viewSector(sector:any){
    this.isUpdate = true;
    this.this_sector.industry_sector_id = sector.industry_sector_id;
    this.this_sector.sector_name = sector.sector_name;
    this.this_sector.sector_slug = sector.sector_slug;
    this.this_sector.sector_desc = sector.sector_desc;
  }

}
