import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonComponent } from './layout/common/common.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AddbidsComponent } from './bids/addbids/addbids.component';
import { ActivebidsComponent } from './bids/activebids/activebids.component';
import { BidwinnersComponent } from './bids/bidwinners/bidwinners.component';
import { MytaskComponent } from './task/mytask/mytask.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';
import { AddappointmentComponent } from './appointments/addappointment/addappointment.component';
import { ViewappointmentsComponent } from './appointments/viewappointments/viewappointments.component';
import { AddquotationComponent } from './quotation/addquotation/addquotation.component';
import { ViewquotationComponent } from './quotation/viewquotation/viewquotation.component';
import { AddauctionComponent } from './auctions/addauction/addauction.component';
import { ViewAuctionsComponent } from './auctions/view-auctions/view-auctions.component';
import { AuctionWinnersComponent } from './auctions/auction-winners/auction-winners.component';
import { OrdersComponent } from './orders/orders.component';
import { AddInvoiceComponent } from './invoices/add-invoice/add-invoice.component';
import { ViewInvoiceComponent } from './invoices/view-invoice/view-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CommonComponent,
    NotificationsComponent,
    AddbidsComponent,
    ActivebidsComponent,
    BidwinnersComponent,
    MytaskComponent,
    AddtaskComponent,
    ViewtaskComponent,
    AddappointmentComponent,
    ViewappointmentsComponent,
    AddquotationComponent,
    ViewquotationComponent,
    AddauctionComponent,
    ViewAuctionsComponent,
    AuctionWinnersComponent,
    OrdersComponent,
    AddInvoiceComponent,
    ViewInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
