import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

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
import { FooterComponent } from './layout/footer/footer.component';
import { MybidsComponent } from './bids/mybids/mybids.component';
import { ReferredclientsComponent } from './referredclients/referredclients.component';
import { AddserviceComponent } from './ourservices/addservice/addservice.component';
import { ViewservicesComponent } from './ourservices/viewservices/viewservices.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ViewproductComponent } from './products/viewproduct/viewproduct.component';
import { AddServiceComponent } from './serviceproviders/add-service/add-service.component';
import { ViewServicesComponent } from './serviceproviders/view-services/view-services.component';
import { MyPanelComponent } from './serviceproviders/my-panel/my-panel.component';
import { AddproductsComponent } from './products/addproducts/addproducts.component';
import { ViewproductsComponent } from './products/viewproducts/viewproducts.component';
import { AddtenderComponent } from './tenders/addtender/addtender.component';
import { ViewtendersComponent } from './tenders/viewtenders/viewtenders.component';
import { AdduserComponent } from './organisationsusers/adduser/adduser.component';
import { ViewusersComponent } from './organisationsusers/viewusers/viewusers.component';
import { AddbillingComponent } from './billing/addbilling/addbilling.component';
import { UpgragebillingComponent } from './billing/upgragebilling/upgragebilling.component';
import { UpcomingbillsComponent } from './billing/upcomingbills/upcomingbills.component';
import { TransactionsComponent } from './billing/transactions/transactions.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AddorganistationComponent } from './organisations/addorganistation/addorganistation.component';
import { VieworganisationsComponent } from './organisations/vieworganisations/vieworganisations.component';
import { UsersComponent } from './users/users.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AddmessageComponent } from './messages/addmessage/addmessage.component';
import { ViewmessageComponent } from './messages/viewmessage/viewmessage.component';
import { ServicecategoryComponent } from './setting/servicecategory/servicecategory.component';
import { CountriesComponent } from './setting/countries/countries.component';
import { ProductcategoriesComponent } from './setting/productcategories/productcategories.component';
import { SectorComponent } from './setting/sector/sector.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoverComponent } from './auth/recover/recover.component';
import { UniqueComponent } from './layout/unique/unique.component';

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
    ViewInvoiceComponent,
    FooterComponent,
    MybidsComponent,
    ReferredclientsComponent,
    AddserviceComponent,
    ViewservicesComponent,
    AddproductComponent,
    ViewproductComponent,
    AddServiceComponent,
    ViewServicesComponent,
    MyPanelComponent,
    AddproductsComponent,
    ViewproductsComponent,
    AddtenderComponent,
    ViewtendersComponent,
    AdduserComponent,
    ViewusersComponent,
    AddbillingComponent,
    UpgragebillingComponent,
    UpcomingbillsComponent,
    TransactionsComponent,
    MyprofileComponent,
    AddorganistationComponent,
    VieworganisationsComponent,
    UsersComponent,
    NewsletterComponent,
    AddmessageComponent,
    ViewmessageComponent,
    ServicecategoryComponent,
    CountriesComponent,
    ProductcategoriesComponent,
    SectorComponent,
    LoginComponent,
    RegisterComponent,
    RecoverComponent,
    UniqueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
