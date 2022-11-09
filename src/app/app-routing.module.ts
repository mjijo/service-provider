import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonComponent } from './layout/common/common.component';
import { UniqueComponent } from './layout/unique/unique.component';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecoverComponent } from './auth/recover/recover.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { NotificationsComponent } from './notifications/notifications.component';

import { MytaskComponent } from './task/mytask/mytask.component';
import { AddtaskComponent } from './task/addtask/addtask.component';
import { ViewtaskComponent } from './task/viewtask/viewtask.component';

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
import { AddbillingComponent } from './billing/addbilling/addbilling.component';
import { UpgragebillingComponent } from './billing/upgragebilling/upgragebilling.component';
import { UpcomingbillsComponent } from './billing/upcomingbills/upcomingbills.component';
import { TransactionsComponent } from './billing/transactions/transactions.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AddorganistationComponent } from './organisations/addorganistation/addorganistation.component';
import { VieworganisationsComponent } from './organisations/vieworganisations/vieworganisations.component';
import { UsersComponent } from './users/users.component';
import { ViewmessageComponent } from './messages/viewmessage/viewmessage.component';
import { AddmessageComponent } from './messages/addmessage/addmessage.component';

import { AddServiceProviderComponent } from './serviceproviders/add-service-provider/add-service-provider.component';
import { ViewServiceProvidersComponent } from './serviceproviders/view-service-providers/view-service-providers.component';

import { ServicecategoryComponent } from './setting/servicecategory/servicecategory.component';
import { CountriesComponent } from './setting/countries/countries.component';
import { ProductcategoriesComponent } from './setting/productcategories/productcategories.component';
import { SectorComponent } from './setting/sector/sector.component';

const routes: Routes = [

  {
    path: '',
    component: CommonComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'tasks', children: [
                                  { path: 'all', component: MytaskComponent },
                                  { path: 'add', component: AddtaskComponent },
                                  { path: 'view/:id', component: ViewtaskComponent},
                                  { path: '', component: MytaskComponent }
                                ]
      },
      { path: 'appointments', children: [
                                  { path: 'all', component: ViewappointmentsComponent },
                                  { path: 'add', component: AddappointmentComponent},
                                  { path: '', component: ViewappointmentsComponent }
                                ]
      },
      { path: 'quotations', children: [
                                  { path: 'all', component: ViewquotationComponent },
                                  { path: 'add', component: AddquotationComponent},
                                  { path: '', component: ViewquotationComponent }
                                ]
      },
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
      { path: 'service-providers', children: [
                                  { path: 'all', component: ViewServiceProvidersComponent },
                                  { path: 'add', component: AddServiceProviderComponent},
                                  { path: 'create', component: AddServiceProviderComponent },
                                  { path: 'view/:id', component: AddServiceProviderComponent },
                                  { path: 'my-panel', component: MyPanelComponent },
                                ]
      },
      { path: 'add-service', component: AddserviceComponent },
      { path: 'view-service', component: ViewservicesComponent },
      { path: 'add-product', component: AddproductComponent },
      { path: 'view-products', component: ViewproductsComponent },
      { path: 'add-tender', component: AddtenderComponent },
      { path: 'view-tenders', component: ViewtendersComponent },
      { path: 'add-organisation-user', component: AdduserComponent },
      { path: 'view-organisation-user', component: ViewusersComponent },
      { path: 'add-billing', component: AddbillingComponent },
      { path: 'billing', component: UpgragebillingComponent },
      { path: 'upcoming-bills', component: UpcomingbillsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'my-profile', component: MyprofileComponent},
      { path: 'add-organisation', component: AddorganistationComponent},
      { path: 'view-organisation', component: VieworganisationsComponent},
      { path: 'users', component: UsersComponent},
      { path: 'subscribers', component: UsersComponent},
      { path: 'new-message', component: AddmessageComponent},
      { path: 'view-message', component: ViewmessageComponent},
      { path: 'settings', children: [
                                  { path: 'service-categories', component: ServicecategoryComponent },
                                  { path: 'countries', component: CountriesComponent },
                                  { path: 'product-categories', component: ProductcategoriesComponent },
                                  { path: 'sectors', component: SectorComponent },
                                  { path: '', component: ServicecategoryComponent }
                                ]
      },
      { path: '', component: DashboardComponent}
    ]
  },
  {
    path: 'auth',
    component: UniqueComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recover', component: RecoverComponent },
      { path: '', component: LoginComponent }
    ]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];

/* documentation at https://angular.io/api/router/ExtraOptions */
const routingOptions: any = {
  scrollPositionRestoration: 'enabled',
  onSameUrlNavigation: 'reload',
  initialNavigation: 'disabled', // not needed from v11
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routingOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

