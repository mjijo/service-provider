import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseApiPath = 'http://109.123.241.92/~serverke488clint/api/public';

  constructor(private httpClient: HttpClient)
  {
    //
  }

  get(param: any): Observable<any> {
    return this.httpClient.get(`${this.baseApiPath}/${param}`)
  }

  get2(param: any): Observable<any> {
    return this.httpClient.get(`${this.baseApiPath}/${param}`)
  }

  getWithOrigin(param: any): Observable<any> {
    let headers = new HttpHeaders({
      'browserRef': 'portal'
    });
    let requestOptions = { headers: headers };
    
    return this.httpClient.get(`${this.baseApiPath}/${param}`,requestOptions)
  }

  post(data: any, param: string): Observable<any> {
    return this.httpClient.post(`${this.baseApiPath}/${param}`, data)
  }

  upload(file:File,path:string):Observable<any> {
    // Create form data
    let formData = new FormData(); 
      
    // Store form name as "file" with file data
    formData.append("file", file, file.name);
      
    // Make http post request over api
    return this.post(formData,path)
  }

  getEndpoints(){
    return {
      sign_in: 'usrLogin',
      settings: {
        countries: {
          get_all_countries: 'getAllCountries',
          add_country: 'addCntry'
        },
        service_categories: {
          get_all_categories: 'getAllServiceCategories',
          add_category: 'addServiceCat'
        },
        product_categories: {
          get_all_product_categories: 'getProdCats',
          add_product_cat: 'addProdCat'
        },
        sectors: {
          get_all_sectors: 'getAllSectors',
          add_sector: 'addSctor'
        },
        entities: {
          get_all_entities: 'getAllEntities'
        }
      },
      service_providers: {
        create: 'addSvcProv',
        view_all: '',
        update: ''
      },
      tasks: {
        get_tasks: 'getAllTasks',
        add_tasks: 'addTask'
      },
      local_storage: {
        user: 'prtlsplocdat'
      }
    }
  }
}
