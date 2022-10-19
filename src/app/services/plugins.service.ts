import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  constructor() { }

  hoverableMenu() {
    $(document).on('mouseenter mouseleave', '.sidebar .nav-item', (ev:any) => {
      var body = $('body');
      var sidebarIconOnly = body.hasClass("sidebar-icon-only");
      var sidebarFixed = body.hasClass("sidebar-fixed");
      if (!('ontouchstart' in document.documentElement)) {
        if (sidebarIconOnly) {
          if (sidebarFixed) {
            if (ev.type === 'mouseenter') {
              body.removeClass('sidebar-icon-only');
            }
          } else {
            var $menuItem = $(this);
            if (ev.type === 'mouseenter') {
              $menuItem.addClass('hover-open')
            } else {
              $menuItem.removeClass('hover-open')
            }
          }
        }
      }
    });
  }
}
