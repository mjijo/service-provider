import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './layout/common/common.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [

  {

    path: '',
    component: CommonComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          { path: '', component: DashboardComponent }
          // { path: 'all-movies', component: AllMoviesComponent },
          // { path: 'coming-soon', component: ComingSoonComponent }

        ]

      },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: '', component: DashboardComponent},
      { path: '**', redirectTo: 'movies' }

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
