import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: any = null;
  public user_profile: any = null;

  constructor(private dataService: DataService) { }

  async ngOnInit() {
    this.user = (this.dataService.user ? this.dataService.user : null);
    this.user_profile = (this.dataService.user_profile ? this.dataService.user_profile : null)
  }

  logOut(){
    this.dataService.logout();
  }

}
