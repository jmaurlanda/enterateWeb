import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsModule } from './components/events/events.module';
import { NotificationModule } from './components/notification/notification.module';
import { RequestModule } from './components/request/request.module';
import { StatisticsModule } from './components/statistics/statistics.module';
import { LoginModule } from './components/authentication/login/login.module';


const routes: Routes = [
  {
    path : 'events',
    loadChildren : './components/events/events.module#EventsModule'
  },
  {
    path: 'notifications',
    loadChildren: './components/notification/notification.module#NotificationModule'
  },
  {
    path: 'requests',
    loadChildren: './components/request/request.module#RequestModule'
  },
  {
    path : 'statistics',
    loadChildren : './components/statistics/statistics.module#StatisticsModule'
  },
  {
    path: 'login',
    loadChildren: './components/authentication/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
