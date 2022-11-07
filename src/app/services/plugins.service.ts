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

  initDataTable(id:string,docName:string,orderByArrIndex:any){
    //
    $('#'+id).DataTable( {
      searching: true,
      paging: true,
      pagingType: 'full_numbers',
      fixedHeader: true,
      pageLength: 30,
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, 'All'],
      ],
      dom: 'Bfrtip',
      columnDefs: [
        {"className": "dt-center", "targets": "_all"}
      ],
      buttons: [
          // 'excelHtml5',
          // 'csvHtml5',
          // 'pdfHtml5',
        {
          extend: 'excelHtml5',
          title: docName
        },
        {
          extend: 'csvHtml5',
          title: docName
        },
        {
          extend: 'pdfHtml5',
          title: docName
        }
      ],
      order: [[orderByArrIndex,"desc"]],
      "bStateSave": true
    } );
  }

  closeAlert(id:string) {
    console.log('should close modal');

    let overlay:any = document.querySelector('.modl-overlay');
    overlay.classList.add('modl-hidden');

    $('#'+id).css("display","none");
    $('.content-wrapper').css("filter","blur(0px)");
  }
  
  showAlert(id:string) {
    console.log('should show modal');

    let overlay:any = document.querySelector('.modl-overlay');
    overlay.classList.remove('modl-hidden');

    $('#'+id).css("display","block");
    $('.content-wrapper').css("filter","blur(10px)");
  }
}
