import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: AuthComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const RoutedComponents = [
  DashboardComponent,
  NotFoundComponent,
  AuthComponent
];
