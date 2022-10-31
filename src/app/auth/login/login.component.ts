import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  async signIn(){
    //
  }

  checkCredentials(){
    let nameExists:boolean = (this.user_params.user_name && this.user_params.user_name.length != 0 ? true : false);
    let passExists:boolean = (this.user_params.user_pass && this.user_params.user_pass.length != 0 ? true : false);
    this.canAttemptSignIn = (nameExists && passExists ? true : false);
  }

}
