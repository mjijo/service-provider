import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ApiService } from '../../../app/services/api.service';
import { DataService } from '../../../app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public canAttemptSignIn: boolean = false;
  public user_params: any = {
    user_name: null,
    user_pass: null,
    remember: false
  }
  public errors: any = {
    input: {
      show: false,
      message: null
    },
    status: {
      show: false,
      message: null
    }
  }

  constructor(private router: Router,
              private apiService: ApiService,
              private dataService: DataService) 
  {
    //
  }

  ngOnInit() {
  }

  async signIn(){
    if(this.canAttemptSignIn == true){
      let payload = { user_name: this.user_params.user_name, user_pass: this.user_params.user_pass }
      let endpoint: string = this.apiService.getEndpoints().sign_in;

      await this.apiService.post(payload,endpoint).subscribe(
        (response: any) => {
          if('data' in response){
            console.log('RESP > ',response);
            // save locally if needed
            if(this.user_params.remember == true){
              let localPayload = {
                user: response.data.user,
                profile: response.data.profile,
                date: this.dataService.dateToday  // new Date().toLocaleDateString("fr-CA") -> this gives -> YYYY-MM-DD
              }
              let encodedPayload = this.dataService.rot47(JSON.stringify(localPayload));
              localStorage.setItem(this.apiService.getEndpoints().local_storage.user, encodedPayload.toString());
              this.dataService.user = response.data;
            }
            this.router.navigate(["/"]);
          }else{
            console.log(response.message);
            this.errors.status.show = true;
            this.errors.status.message = response.message;
          }
        },
        (error: any) => {
          console.log('Login Err >', error);
          this.errors.status.show = true;
          this.errors.status.message = 'Unable to log in. This is probably a network issue, please try again.';
        }
      );
    }else{
      this.errors.input.show = true;
      this.errors.input.message = 'Your username and password are required to sign in.';
    }
    
  }

  checkCredentials(){
    let nameExists:boolean = (this.user_params.user_name && this.user_params.user_name.length != 0 ? true : false);
    let passExists:boolean = (this.user_params.user_pass && this.user_params.user_pass.length != 0 ? true : false);
    this.canAttemptSignIn = (nameExists && passExists ? true : false);
  }

}
