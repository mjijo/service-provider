import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PluginsService } from 'src/app/services/plugins.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private pluginService:PluginsService) { }

  ngOnInit(){
   
  }

  ngAfterViewInit() {
    this.pluginService.hoverableMenu();
  }

}
