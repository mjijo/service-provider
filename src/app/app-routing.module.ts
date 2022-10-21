import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './layout/common/common.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MytaskComponent } from './task/mytask/mytask.component';
import { AddappointmentComponent } from './appointments/addappointment/addappointment.component';
import { ViewappointmentsComponent } from './appointments/viewappointments/viewappointments.component';
import { AddquotationComponent } from './quotation/addquotation/addquotation.component';
import { ViewquotationComponent } from './quotation/viewquotation/viewquotation.component';
import { MybidsComponent } from './bids/mybids/mybids.component';
import { AddauctionComponent } from './auctions/addauction/addauction.component';
import { ViewAuctionsComponent } from './auctions/view-auctions/view-auctions.component';
import { AuctionWinnersComponent } from './auctions/auction-winners/auction-winners.component';
import { OrdersComponent } from './orders/orders.component';
import { AddInvoiceComponent } from './invoices/add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './invoices/view-invoice/view-invoice.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { ReferredclientsComponent } from './referredclients/referredclients.component';
import { AddserviceComponent } from './ourservices/addservice/addservice.component';
import { ViewservicesComponent } from './ourservices/viewservices/viewservices.component';
import { AddServiceComponent } from './serviceproviders/add-service/add-service.component';
import { ViewServicesComponent } from './serviceproviders/view-services/view-services.component';
import { MyPanelComponent } from './serviceproviders/my-panel/my-panel.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';
import { AddtenderComponent } from './tenders/addtender/addtender.component';
import { ViewtendersComponent } from './tenders/viewtenders/viewtenders.component';
import { AdduserComponent } from './organisationsusers/adduser/adduser.component';
import { ViewusersComponent } from './organisationsusers/viewusers/viewusers.component';

const routes: Routes = [

  {

    path: '',
    component: CommonComponent,
    children: [
      

      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: DashboardComponent},
      { path: 'notifications', component: NotificationsComponent },
      { path: 'my-tasks', component: MytaskComponent },
      { path: 'add-appointment', component: AddappointmentComponent },
      { path: 'view-appointments', component: ViewappointmentsComponent },
      { path: 'add-quotation', component: AddquotationComponent },
      { path: 'view-quotations', component: ViewquotationComponent },
      { path: 'my-bids', component: MybidsComponent },
      { path: 'add-auction', component: AddauctionComponent },
      { path: 'view-auctions', component: ViewAuctionsComponent },
      { path: 'bid-winners', component: AuctionWinnersComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'add-invoice', component: AddInvoiceComponent },
      { path: 'invoices', component: ViewInvoiceComponent },
      { path: 'add-task', component: AddtaskComponent },
      { path: 'view-task', component: ViewtaskComponent },
      { path: 'referred-clients', component: ReferredclientsComponent },
      { path: 'add-service', component: AddserviceComponent },
      { path: 'view-service', component: ViewservicesComponent },
      { path: 'add-serviceprovider', component: AddServiceComponent },
      { path: 'view-serviceprovider', component: ViewServicesComponent },
      { path: 'my-panel', component: MyPanelComponent },
      { path: 'add-product', component: AddproductComponent },
      { path: 'view-products', component: ViewproductsComponent },
      { path: 'add-tender', component: AddtenderComponent },
      { path: 'view-tenders', component: ViewtendersComponent },
      { path: 'add-organisation-user', component: AdduserComponent },
      { path: 'view-organisation-user', component: ViewusersComponent },
    
      { path: '**', redirectTo: 'dashboard' }

    ]

  },

  // otherwise redirect to home

  { path: '**', redirectTo: '' }

];

​

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
