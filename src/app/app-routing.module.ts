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
